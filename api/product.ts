import prisma from "../lib/prisma";
const express = require("express");
const router = express.Router();
const cors = require("cors");

const params = {
  origin: "http://localhost:3000",
};

router.get("/", cors(params), async (req: any, res: any) => {
  try {
    const products = await prisma.product.findMany({
      include: { image: true },
    });

    res.json({ products });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", cors(params), async (req: any, res: any) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: req.params.id,
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
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
