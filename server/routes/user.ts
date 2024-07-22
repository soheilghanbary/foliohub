import { Hono } from "hono";
import { db } from "../db";
import { getUserSession } from "../lib/auth";

export const userRoute = new Hono()
  .get("/", async (c) => {
    const session = await getUserSession();
    const user = await db.user.findFirst({ where: { id: session?.id } });
    return c.json(user);
  })
  .put("/", async (c) => {
    const user = await getUserSession();
    const body = await c.req.json();
    const updated = await db.user.update({
      where: { id: user?.id },
      data: body,
    });
    return c.json({
      data: updated,
      msg: "حساب کاربری شما ویرایش شد!",
    });
  });
