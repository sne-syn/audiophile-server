const express = require("express");
const app = express();
const category = require("./api/category");
const product = require("./api/product");

app.use(express.json({ extended: false }));
app.use("/api/category", category);
app.use("/api/product", product);
app.use("/assets", express.static("assets"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
