import prisma from "../lib/prisma";
const express = require("express");
const router = express.Router();
const cors = require("cors");

const params = {
  origin: "http://localhost:3000",
};

router.get("/", cors(params), async (req: any, res: any) => {
  try {
    const data = await prisma.category.findMany({
      include: { image: true },
    });

    res.json({ data });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:name", cors(params), async (req: any, res: any) => {
  const data = await prisma.category.findFirst({
    where: {
      name: req.params.name,
    },
    include: {
      products: {
        include: {
          image: true,
          featuredImage: {
            include: {
              image: true,
            },
          },
          heroImage: {
            include: {
              image: true,
            },
          },
        },
      },
    },
  });
  res.json({ data });
});

router.get("/:name/:productId", cors(params), async (req: any, res: any) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.productId,
    },
    include: {
      others: {
        include: {
          image: true,
        },
      },
      image: true,
      includes: true,
    },
  });
  res.json({ product });
});

module.exports = router;
