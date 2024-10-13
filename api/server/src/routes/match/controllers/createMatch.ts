import Elysia from "elysia";
import Match from "../model";
import { isUser_Authenticated } from "../../../middleware/isUserAuth";

const createMatch = new Elysia()
    .use(isUser_Authenticated)
    .post("/matchCallack", async ({ set, body }) => {
        const {
            tournament,
            user,
            flutterPaymentId,
        } = body

        try {
            // Check if the user is already registered for the match
            const existingMatch = await Match.findOne({ tournament, user });

            if (existingMatch) {
                // If the user is already registered, return a conflict status
                set.status = 409; // Conflict
                return {
                    message: "User is already registered for this match."
                };
            }

            const match = new Match({
                tournament,
                user,
                flutterPaymentId,
            });
            await match.save();

            set.status = 201
            return {
                message: "User has been paid for this match",
                match
            }

        } catch (err) {
            console.log(err);
            set.status = 500
            return {
                message: "Error creating match"
            }
        }
    })
export default createMatch