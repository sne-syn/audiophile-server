import prisma from "../lib/prisma";
import express, { Response, Request } from "express";
const app = express();
import cors from "cors";

app.get("/", cors(), async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();

    res.json({ categories });
  } catch (error) {
    console.error(error);
  }
});

export default app;
