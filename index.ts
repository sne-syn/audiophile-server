import express from "express";
const app = express();
import category from "./api/category";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.use("/api/category", category);
app.use("/assets", express.static("assets"));

export default app;
