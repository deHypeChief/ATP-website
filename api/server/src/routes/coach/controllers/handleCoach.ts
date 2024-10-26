import Elysia from "elysia";
import Coach from "../model";

const handleCoach = new Elysia()
    .get("/getCoach/:id", async ({ set, params: { id } }) => {
        try {
            const coach = await Coach.findById({ id })

            set.status = 200
            return {
                message: "Coach found",
                coach
            }

        } catch (err) {
            set.status = 500;
            console.log(err);
            return {
                message: "Error getting coach data"
            };
        }
    })
    .get("/getCoaches", async ({ set }) => {
        const coaches = await Coach.find()

        set.status = 200
        return {
            message: "Coaches found",
            coaches
        }
    })

export default handleCoach