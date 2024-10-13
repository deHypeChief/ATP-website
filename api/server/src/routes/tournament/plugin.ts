import Elysia from "elysia"
import handleTour from "./controllers/handleTournament"
import createTour from "./controllers/createTournament"

const tour = new Elysia({
    prefix: "/tour"
})
    .use(createTour)
    .use(handleTour)

export default tour