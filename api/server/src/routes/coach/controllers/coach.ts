import Elysia from "elysia";
import { isAdmin_Authenticated } from "../../../middleware/isAdminAuth";
import Coach from "../model";
import { isUser_Authenticated } from "../../../middleware/isUserAuth";
import User from "../../user/model";

const createCoach = new Elysia()
    .use(isAdmin_Authenticated)
    .post("/createCoach", async ({ set, body }) => {
        const { name, email, profileImageUrl, profileInfo } = body;

        try {
            const findCoachEmail = await Coach.findOne({ email });

            if (findCoachEmail) {
                set.status = 400;
                return {
                    message: "This email is already linked to a coach"
                };
            }

            // Create a new coach
            const coach = new Coach({
                name,
                email,
                profileImageUrl,
                profileInfo,
                comment: []
            });
            await coach.save();

            set.status = 201;
            return {
                message: "Coach has been created",
                data: coach
            };

        } catch (err) {
            set.status = 500;
            console.log(err);
            return {
                message: "Error creating coach"
            };
        }
    })
    .post("/assignCoach", async ({ set, body }) => {
        const { userId, coachId } = body;

        try {
            // Find the user by id
            const user = await User.findById(userId);
            // Find the coach by id (corrected from userId to coachId)
            const coach = await Coach.findById(coachId);

            if (!user) {
                set.status = 400;
                return {
                    message: "User not found, invalid id"
                };
            }
            if (!coach) {
                set.status = 400;
                return {
                    message: "Coach not found, invalid id"
                };
            }

            // Check if a coach is already assigned to the user
            const alreadyAssigned = await User.findOne({ assignedCoach: coachId, _id: userId });
            if (alreadyAssigned) {
                set.status = 400;
                return {
                    message: "A coach has already been assigned to this user"
                };
            }

            // Assign the coach to the user
            const assignCoach = await User.findByIdAndUpdate(
                userId,
                { assignedCoach: coachId },
                { new: true }
            );

            set.status = 200;
            return {
                message: "Coach assignment valid", // Fixed typo
                assignCoach
            };

        } catch (err) {
            set.status = 500;
            console.log(err);
            return {
                message: "Error assigning coach"
            };
        }
    });

export default createCoach;
