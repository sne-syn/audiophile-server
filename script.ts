import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = express();

// GET CATEGORIES LIST
app.get("/category", async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany();

  res.json({ categories });
});

// GET PRODUCTS LIST BY CATEGORY
app.get("/category/:name", async (req: Request, res: Response) => {
  const category = await prisma.category.findFirst({
    where: {
      name: req.params.name,
    },
    include: {
      products: true,
    },
  });

  res.json({ category });
});

// GET ALL PRODUCTS
app.get("/products", async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  const count = products.length;

  res.json({ products, count });
});

// GET PRODUCT BY ID
app.get("/products/:id", async (req: Request, res: Response) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.id,
    },
    include: {
      category: true,
      others: true,
      images: true,
      includes: true,
    },
  });

  res.json({ product });
});

app.listen(3001);
