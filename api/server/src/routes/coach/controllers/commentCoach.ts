import Elysia from "elysia";
import { isUser_Authenticated } from "../../../middleware/isUserAuth";
import Coach from "../model";

const commentCoach = new Elysia()
    .use(isUser_Authenticated)
    .post("/user/comment", async ({ set, body, user }) => {
        const { coachId, comment, rating } = body;

        try {
            // Find the coach by id
            const coach = await Coach.findById(coachId);

            if (!coach) {
                set.status = 404;
                return {
                    message: "Coach not found"
                };
            }

            // Add new comment to the coach's comment array
            coach.comment.push({
                user: user._id,
                comment,
                rating
            });

            // Save the updated coach document
            await coach.save();

            set.status = 201;
            return {
                message: "Comment added successfully",
                data: coach
            };

        } catch (err) {
            set.status = 500;
            console.log(err);
            return {
                message: "Error adding comment"
            };
        }
    })

export default commentCoach