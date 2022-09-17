import prisma from "../lib/prisma";
import corsWithParams from "../lib/cors";
const express = require("express");
const router = express.Router();

router.get("/", corsWithParams, async (req: any, res: any) => {
  try {
    const payload = await prisma.category.findMany({
      include: { image: true },
    });

    res.json({ payload });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:name", corsWithParams, async (req: any, res: any) => {
  const payload = await prisma.category.findFirst({
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
  res.json({ payload });
});

router.get("/:name/:productId", corsWithParams, async (req: any, res: any) => {
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
