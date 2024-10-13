import { Elysia } from "elysia";
import pc from "picocolors";
import { connectDb } from "./config/db.config";
import admin from "./routes/admin/plugin";
import swagger from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { allowedOrigins } from "./config/origin.config";
import plan from "./routes/plans/plugin";
import user from "./routes/user/plugin";
import video from "./routes/video/plugin";
import tour from "./routes/tournament/plugin";
import match from "./routes/match/plugin";

// Connect to the database
connectDb();
// Initialize the Elysia app with a prefix for all routes
export const app = new Elysia();

// Apply middlewares and plugins
app
  .use(swagger({
    path: "/docs",
  }))
  .use(cors({ origin: allowedOrigins }))
  .use(admin)
  .use(plan)
  .use(user)
  .use(video)
  .use(tour)
  .use(match)
  .get("/", () => "Server is Up and running 🦊")
  .onError((error) => {
    console.error("Error occurred:", error);
    return {
      status: 500,
      message: "Internal Server Error. Please try again later.",
    };
  })
  .listen(Bun.env.PORT || 3002);

// Log server startup details
console.log(
  `🦊 Elysia is running at ` +
  pc.yellow(`${app.server?.hostname}:${app.server?.port}`)
);
