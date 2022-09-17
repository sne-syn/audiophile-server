import prisma from "../lib/prisma";
const express = require("express");
const router = express.Router();
const cors = require("cors");

const params = {
  origin: "http://localhost:3000",
};

router.get("/", cors(params), async (req: any, res: any) => {
  try {
    const payload = await prisma.image.findMany();

    res.json({ payload });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", cors(params), async (req: any, res: any) => {
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
