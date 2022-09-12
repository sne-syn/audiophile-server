import prisma from "../lib/prisma";
const express = require("express");
const router = express.Router();
const Request = express.Request;
const Response = express.Response;
const cors = require("cors");
const app = express();

router.get("/", cors(), async (req: any, res: any) => {
  try {
    const categories = await prisma.category.findMany();

    res.json({ categories });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
