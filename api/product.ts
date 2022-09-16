import prisma from "../lib/prisma";
const express = require("express");
const router = express.Router();
const cors = require("cors");

const params = {
  origin: "http://localhost:3000",
};

router.get("/", cors(params), async (req: any, res: any) => {
  try {
    const data = await prisma.product.findMany({
      include: { image: true },
    });

    res.json({ data });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", cors(params), async (req: any, res: any) => {
  try {
    const data = await prisma.product.findUnique({
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
    });

    res.json({ data });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
