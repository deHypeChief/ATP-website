import Elysia from "elysia";
import { isAdmin_Authenticated } from "../../../middleware/isAdminAuth";
import Plan from "../model";
import Coach from "../../coach/model";
import dayjs from "dayjs";
import User from "../../user/model";
import { sendMail } from "../../../middleware/sendMail";
import Notify from "../../notifications/model";

const adminHandlePlan = new Elysia({
    prefix: "/admin"
})
    .use(isAdmin_Authenticated)
    .use(sendMail)
    .post("/createPlan", async ({ set, body }) => {
        const { planName, priceInfo, description, note, planImage, filterPrams } = body;
    
        try {
            const existingPlan = await Plan.findOne({ planName });
    
            if (existingPlan) {
                set.status = 400;
                return { message: "This plan name is already taken" };
            }
    
            if (!filterPrams || !filterPrams.length) {
                set.status = 400;
                return { message: "Please add filter parameters" };
            }
    
            // No need to split filterPrams, it's already an array
            const getCoaches = await Coach.find({ level: { $in: filterPrams } });
    
            const coachIDs = getCoaches.map(coach => coach._id); // Map to extract IDs
    
            const newPlan = await Plan.create({
                planName,
                priceInfo,
                description,
                note: note == "" ? "" : note,
                planImage,
                filterPrams,
                coaches: coachIDs // Include coach IDs in the new plan
            });
    
            return { message: "Plan created successfully", plan: newPlan };
    
        } catch (err) {
            set.status = 500;
            console.log(err);
            return { message: "Error while creating plan" };
        }
    })
    .post("/createBillingPlan/:planId", async ({ set, body, params: {planId} }) => {
        const { billingName, interval, currency, discountPercentage } = body;

        try {

            // Ensure interval and amount are positive numbers
            if (parseInt(interval) <= 0) {
                set.status = 400;
                return { message: "Interval must be a positive number" };
            }

            // Check if the plan exists in the database
            const existingPlan = await Plan.findById(planId);

            if (!existingPlan) {
                set.status = 404;
                return { message: "Plan not found" };
            }


            

            // Add the billing plan to the existing plan's billingPlans array
            existingPlan.billingPlans.push({
                billingName,
                interval: parseInt(interval),
                currency,
                discountPercentage,
            });

            // Save the updated plan
            await existingPlan.save();

            return { message: "Billing plan created successfully", plan: existingPlan };

        } catch (err) {
            // Log and return server error
            set.status = 500;
            console.log(err);
            return { message: "Error while creating billing plan", error: err.message };
        }
    })

export default adminHandlePlan;
