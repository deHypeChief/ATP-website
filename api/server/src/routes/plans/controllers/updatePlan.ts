import Elysia from "elysia";
import { isAdmin_Authenticated } from "../../../middleware/isAdminAuth";
import { createPlanModel } from "../setup";
import Plan from "../model";

const updatePlan = new Elysia()
    .use(isAdmin_Authenticated)
    .use(createPlanModel)
    .post("/updatePlan", async ({ set, body }) => {
        const { title, price, info, activePerks, inActivePerks } = body

        const planFound = await Plan.findOne({ title: title })

        if (!planFound) {
            set.status = 400
            return {
                message: `${title} plan not found`,
            }
        }

        const plan = await Plan.findOneAndUpdate(
            {title: title},
            {
                title,
                price,
                info,
                activePerks, 
                inActivePerks
            },
            {new: true}
        )

        set.status = 200
        return{
            message: `the ${plan?.title} has been updated`,
            data: {
                plan
            }
        }
    }, {
        body: "createPlanModel"
    })

export default updatePlan