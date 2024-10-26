import Elysia from "elysia";
import Plan from "../model";
import { createPlanModel } from "../setup";
import { isAdmin_Authenticated } from "../../../middleware/isAdminAuth";

const createPlan = new Elysia()
    .use(createPlanModel)
    .use(isAdmin_Authenticated)
    .post("/createPlan", async ({ set, body }) => {
        const { title, price, info, activePerks, inActivePerks } = body

        const planFound = await Plan.findOne({ title: title })

        if (planFound) {
            set.status = 400
            return {
                message: "Plan with that title already exist",
                data: {
                    title
                }
            }
        }

        const plan = new Plan({
            activePerks,
            inActivePerks,
            price,
            info,
            title
        })
        await plan.save();

        set.status = 201;
        return {
            message: 'Admin registered successfully',
            data: {
                plan
            },
        };

    }, {
        body: "createPlanModel"
    })

export default createPlan