import prisma from "../lib/prisma";
import corsWithParams from "../lib/cors";
const express = require("express");
const router = express.Router();

router.get("/", corsWithParams, async (req: any, res: any) => {
  try {
    const payload = await prisma.image.findMany();

    res.json({ payload });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", corsWithParams, async (req: any, res: any) => {
  try {
    const payload = await prisma.image.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.json({ payload });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
