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

module.exports = router;
