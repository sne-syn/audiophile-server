import prisma from "../lib/prisma";
const express = require("express");
const router = express.Router();
const cors = require("cors");

router.get("/", cors(), async (req: any, res: any) => {
  try {
    const categories = await prisma.category.findMany();

    res.json({ categories });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:name", cors(), async (req: any, res: any) => {
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

module.exports = router;
