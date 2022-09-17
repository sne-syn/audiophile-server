import prisma from "../lib/prisma";
const express = require("express");
const router = express.Router();

router.get("/", async (req: any, res: any) => {
  try {
    const payload = await prisma.product.findMany({
      include: { image: true },
    });

    res.json({ payload });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", async (req: any, res: any) => {
  try {
    const payload = await prisma.product.findUnique({
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

    res.json({ payload });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
