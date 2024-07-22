import { Hono } from "hono";
import { db } from "../db";
import { getUserSession } from "../lib/auth";

export const siteRoute = new Hono()
  .get("/", async (c) => {
    const sites = await db.site.findMany();
    return c.json(sites);
  })
  .post("/", async (c) => {
    const body = await c.req.json();
    const session = await getUserSession();
    const site = await db.site.create({
      data: { ...body, userId: session?.id },
    });
    return c.json(site);
  });
