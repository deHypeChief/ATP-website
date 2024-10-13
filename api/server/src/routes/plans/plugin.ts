import Elysia from "elysia";
import getPlans from "./controllers/getPlans";
import createPlan from "./controllers/createPlan";
import deletePlan from "./controllers/deletePlan";
import updatePlan from "./controllers/updatePlan";

const plan = new Elysia({
    prefix: "/plan"
})
    .use(getPlans)
    .use(createPlan)
    .use(deletePlan)
    .use(updatePlan)

export default plan