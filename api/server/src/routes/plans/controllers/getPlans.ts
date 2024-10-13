import Elysia from "elysia";
import { isAdmin_Authenticated } from "../../../middleware/isAdminAuth";
import Plan from "../model";

const getPlans = new  Elysia()
    .get('/getPlans', async ({set})=>{
        const plans = await Plan.find()

        set.status = 200
        return {
            message: "plans found",
            data: plans
        }
    })

export default getPlans