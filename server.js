const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

const data = require("./data.json");

app.get("/data", (req, res) => {
  res.json(data);
});

app.get("/check", (req, res) => {
  console.log("API is working");
});

app.listen(PORT, () => {
  console.log(`✅ API is running at http://localhost:${PORT}/data`);
});
