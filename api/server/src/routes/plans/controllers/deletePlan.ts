import Elysia from "elysia"
import Plan from "../model"
import { isAdmin_Authenticated } from "../../../middleware/isAdminAuth"

const deletePlan = new Elysia()
    .use(isAdmin_Authenticated)
    .get('/deletePlan', async ({ set, params: { title } }) => {
        const delPlan = await Plan.findOneAndDelete({title})

        if (delPlan) {
            set.status = 200
            return {
                message: "Plan deleted",
                data: delPlan
            }
        }
    })

export default deletePlan