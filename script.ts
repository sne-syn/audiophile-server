import express, { Request, Response } from "express";
import prisma from "./lib/prisma";
import app from "./lib/app";
import cors from "cors";
app.use(cors());

// GET CATEGORIES LIST
app.get("/category", async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany();

  res.json({ categories });
});

// GET IMAGE LIST
app.get("/image", cors(), async (req: Request, res: Response) => {
  const images = await prisma.image.findMany();

  res.json({ images });
});

// GET INCLUDE LIST
app.get("/include", cors(), async (req: Request, res: Response) => {
  const includes = await prisma.include.findMany();

  res.json({ includes });
});

// GET OTHER LIST
app.get("/other", cors(), async (req: Request, res: Response) => {
  const others = await prisma.other.findMany();

  res.json({ others });
});

// GET CALLERY LIST
app.get("/gallery", cors(), async (req: Request, res: Response) => {
  const galleries = await prisma.gallery.findMany();

  res.json({ galleries });
});

// GET PRODUCTS LIST
app.get("/product", cors(), async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();

  res.json({ products });
});

// GET PRODUCTS LIST BY CATEGORY
app.get("/category/:name", cors(), async (req: Request, res: Response) => {
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

// GET PRODUCT BY ID
app.get("/products/:id", cors(), async (req: Request, res: Response) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.id,
    },
    include: {
      category: true,
      others: true,
      image: true,
      includes: true,
    },
  });

  res.json({ product });
});

app.listen(5000, ()=> {
  console.log("Running on port 5000")
});
app.use("/assets", express.static("assets"));

module.exports = app;
