import { Hono } from "hono";
import { userRoute } from "./routes/user";

export const app = new Hono().basePath("/api");

// rotues
app.route("/user", userRoute);

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});
