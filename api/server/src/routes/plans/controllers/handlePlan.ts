import Elysia from "elysia";
import Plan from "../model";

const plans = new Elysia()
    .get("/getPlans", async ({ set }) => {
        try {
            const plans = await Plan.find()

            set.status = 200
            return {
                message: "Plans found",
                plans
            }
        } catch (err) {
            set.status = 500;
            console.log(err)
            return { message: "Error while getting " };
        }
    })

export default plans