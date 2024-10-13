import Elysia from "elysia";
import createMatch from "./controllers/createMatch";

const match = new Elysia({
    prefix: "/match"
})
    .use(createMatch)

export default match