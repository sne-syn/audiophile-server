import prisma from "../lib/prisma";
import corsWithParams from "../lib/cors";
const express = require("express");
const router = express.Router();

router.get("/", corsWithParams(), async (req: any, res: any) => {
  try {
    const images = await prisma.image.findMany();

    res.json({ images });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", corsWithParams(), async (req: any, res: any) => {
  try {
    const image = await prisma.image.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.json({ image });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
