const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({"users": ["rafael"]})
});

app.listen(8000, () => {
  console.log("listening on 5000");
});
