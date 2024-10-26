import Elysia from "elysia";
import { isUser_Authenticated } from "../../../middleware/isUserAuth";
import Plan from "../model";
import flw from "../../../config/flutterwave.config";
import User from "../../user/model";
import dayjs from "dayjs";
import Coach from "../../coach/model";
import Notify from "../../notifications/model";
import { sendMail } from "../../../middleware/sendMail";

const userHandle = new Elysia({
    prefix: "/user"
})
    .use(isUser_Authenticated)
    .use(sendMail)
    .post("/pay", async ({ set, body, user }) => {
        const { planId, billingType, coachId } = body;

        try {
            // Validate required fields
            if (!planId || billingType === undefined) {
                set.status = 400;
                return { message: "planId and billingType are required" };
            }

            // Find the plan by ID
            const plan = await Plan.findById(planId);
            if (!plan) {
                set.status = 400;
                return { message: "Invalid plan ID" };
            }

            const coach = await Coach.findById(coachId)

            const billing = plan.billingPlans[billingType];
            if (!billing) {
                set.status = 400;
                return { message: "Invalid billing type" };
            }

            if (!coach) {
                set.status = 400;
                return { message: "Invalid Coach id" };
            }

            // get payments
            const discountFactor = 1 - (billing.discountPercentage / 100);

            // Calculate the payment amount
            let payAmount = coach.price * billing.interval * discountFactor;

            // Prepare payment request
            const tx_ref = `${user.username}-${Date.now()}`;
            const paymentPayload = {
                tx_ref,
                amount: payAmount,
                currency: billing.currency,
                redirect_url: `${process.env.ACTIVE_API_ORIGIN}/plan/user/${planId}/${billingType}/${coachId || "null"}/planCallback`,
                customer: {
                    email: user.email,
                    name: user.fullName,
                    phonenumber: user.phoneNumber
                },
                customizations: {
                    title: `${billing.billingName} for ${plan.planName}`
                }
            };

            // Make payment request to Flutterwave
            const flwResponse = await flw.post("/payments", paymentPayload);

            set.status = 200;
            return flwResponse;

        } catch (err) {
            set.status = 500;
            console.log(err)
            return { message: "Error while making payment", error: err };
        }
    })
    .post("/:planId/:billingType/:coachId/planCallback", async ({ generateAtpEmail, mailConfig, set, query, user, params: { billingType, coachId, planId } }) => {
        try {
            // Verify transaction via Flutterwave
            const verifyTransactions = await flw.get(`transactions/${query.transaction_id}/verify`);
    
            if (verifyTransactions.data.status !== "success") {
                set.status = 400;
                return { message: "Transaction Error" };
            }
    
            // Find the plan by ID
            const plan = await Plan.findById(planId);
            if (!plan) {
                set.status = 400;
                return { message: "Invalid plan ID" };
            }
    
            // Find the coach by ID
            const coach = coachId ? await Coach.findById(coachId) : null;
    
            const billing = plan.billingPlans[parseInt(billingType)];
            if (!billing) {
                set.status = 400;
                return { message: "Invalid billing type" };
            }
    
            // Update user membership details
            const updatedUser = await User.findByIdAndUpdate(
                user._id,
                {
                    membership: plan.planName,
                    assignedCoach: coachId || null,
                    plan: {
                        planId: planId,
                        planIntervalNumber: parseInt(billingType),
                        flutterwavePlanId: query.transaction_id,
                        planStartDate: Date.now(),
                        renewalDate: dayjs().add(billing.interval, 'month').toISOString()
                    }
                },
                { new: true }
            ).select("-password");
    
            // Notify user of successful subscription
            await Notify.create({
                userID: user._id,
                title: `Subscription Successful 🎉`,
                message: `Hi ${user.fullName}, you've successfully subscribed to the ${plan.planName} plan! ${coach ? `Your coach, ${coach.coachName}, will be in touch soon.` : ''} Your next renewal is on ${dayjs().add(billing.interval, 'month').format("MMMM D, YYYY")}.`,
                type: "info"
            });
    
            // Send email notification
            mailConfig(
                user.email,
                `Subscription Confirmation: ${plan.planName} Plan`,
                generateAtpEmail({
                    title: `Welcome to the ${plan.planName} Plan! 🎉`,
                    content: `
                        <p>Hi ${user.fullName},</p>
                        <p>Thank you for subscribing to the <strong>${plan.planName}</strong> plan.</p>
                        <br/>
                        <p>Your subscription details are as follows:</p>
                        <ul>
                            <li><strong>Plan Name:</strong> ${plan.planName}</li>
                            ${coach ? `<li><strong>Coach Assigned:</strong> ${coach.coachName}</li>` : ''}
                            <li><strong>Subscription Start Date:</strong> ${dayjs().format("MMMM D, YYYY")}</li>
                            <li><strong>Next Renewal Date:</strong> ${dayjs().add(billing.interval, 'month').format("MMMM D, YYYY")}</li>
                        </ul>
                        <br/>
                        <p>If you have any questions, feel free to reach out to us.</p>
                        <p>We're excited to have you on board, and we look forward to supporting you in your journey!</p>
                        <br/>
                        <p>Best regards,</p>
                        <p>The Team</p>
                    `
                })
            );
    
            set.status = 200;
            return {
                flw: verifyTransactions,
                user: updatedUser,
                message: "Membership successfully updated"
            };
    
        } catch (err) {
            set.status = 500;
            console.log(err);
            return { message: "Error during payment validation", error: err };
        }
    });
    

export default userHandle;
