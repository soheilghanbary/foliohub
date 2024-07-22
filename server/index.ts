import { Hono } from "hono";
import { logger } from "hono/logger";
import { siteRoute } from "./routes/site";
import { userRoute } from "./routes/user";

export const app = new Hono();

// middleware
app.use("*", logger());

// rotues
const apiRoutes = app
  .basePath("/api")
  .route("/user", userRoute)
  .route("/sites", siteRoute);

export type AppType = typeof apiRoutes;
