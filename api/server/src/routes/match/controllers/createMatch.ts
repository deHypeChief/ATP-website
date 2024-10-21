import Elysia from "elysia";
import Match from "../model";
import { isUser_Authenticated } from "../../../middleware/isUserAuth";
import Tournament from "../../tournament/model";
import Notify from "../../notifications/model";

const createMatch = new Elysia()
    .use(isUser_Authenticated)
    .get("/getUserMatches", async ({ set, user }) => {
        try {
            // Find matches for the authenticated user
            const matches = await Match.find({ user: user._id });

            // Count the number of matches the user has won
            let matchCount = 0;
            if (matches.length > 0) {
                matches.forEach((item) => {
                    if (item.won) {
                        matchCount += 1;
                    }
                });
            }

            // Send successful response with match data
            set.status = 200;
            return {
                message: "Matches found",
                matches,
                matchesWon: matchCount // Fixed semicolon issue
            };
        } catch (err) {
            console.log(err);
            set.status = 500;
            return {
                message: "Error retrieving matches" // Updated error message for clarity
            };
        }
    })
    .post("/matchCallack", async ({ set, body, user }) => {
        const {
            tournament,
            userID,
            flutterPaymentId,
        } = body;

        try {
            // Check if the user is already registered for the match
            const existingMatch = await Match.findOne({ tournament, userID });
            const tour = await Tournament.findOne({ _id: tournament }); // Find tournament by ID

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
            await Notify.create({
                userID: user._id,
                title: `Registered for a tournament`,
                message: `You have registered for the ${tour?.name}`,
                type: "info"
            });
            set.status = 201;
            return {
                message: "User has paid for this match",
                match,
                tournament: tour, // This now contains the full tournament object
                user
            };

        } catch (err) {
            console.log(err);
            set.status = 500;
            return {
                message: "Error creating match"
            };
        }
    })
    .post("/matchCheck", async ({ set, body }) => {
        const {
            tournament,
            user,
        } = body;
        try {
            const existingMatch = await Match.findOne({ tournament, user })
                .populate("user")
                .populate("tournament"); // Populating the tournament field to get full details

            if (existingMatch) {
                set.status = 200;
                return {
                    message: "User is already registered for this match.",
                    match: existingMatch
                };
            }

            set.status = 200;
            return {
                message: "User not found",
            };

        } catch (err) {
            console.log(err);
            set.status = 500;
            return {
                message: "Error checking match"
            };
        }
    });

export default createMatch;