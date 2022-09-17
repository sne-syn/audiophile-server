const express = require("express");
const app = express();
const category = require("./api/category");
const image = require("./api/image");
const product = require("./api/product");
const cors = require("cors");

const corsParams = {
  origin: [
    "http://localhost:3000",
    "https://*audiophile*.*.*",
    "https://*.vercel.app/",
    "*",
    "https://audiophile-ui.vercel.app/",
  ],
};

app.use(cors(corsParams));
app.use(express.json({ extended: false }));
app.use("/api/category", category);
app.use("/api/image", image);
app.use("/api/product", product);
app.use("/assets", express.static("assets"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
