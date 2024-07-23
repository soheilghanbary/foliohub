import { Hono } from "hono";
import { logger } from "hono/logger";
import { siteRoute } from "./routes/site";
import { userRoute } from "./routes/user";
import puppeteer from "puppeteer";

export const app = new Hono();

// middleware
app.use("*", logger());

app.post("/api/take-screenshot", async (c) => {
  const { url } = await c.req.json();
  try {
    // Launch a new browser instance
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Navigate to the provided URL
    await page.goto(url, { waitUntil: "networkidle2" });
    // Take a screenshot
    const screenshot = await page.screenshot({ encoding: "base64" });
    // Close the browser
    await browser.close();
    // Return the screenshot as a base64 string
    return c.json({ screenshot: screenshot });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error taking screenshot:", error);
    return c.json({ error: "Failed to take screenshot" }, 500);
  }
});

// rotues
const apiRoutes = app
  .basePath("/api")
  .route("/user", userRoute)
  .route("/sites", siteRoute);

export type AppType = typeof apiRoutes;
