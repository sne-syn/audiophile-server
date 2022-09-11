import prisma from "../lib/prisma";
import express, { Response, Request } from "express";
const app = express();

app.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();

    res.json({ categories });
  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
