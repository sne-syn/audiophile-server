const express = require("express");
const app = express();
const category = require("./api/category");

app.use(express.json({ extended: false }));
app.use("/api/category", category);
app.use("/assets", express.static("assets"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
