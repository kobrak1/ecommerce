const express = require("express");
const monggose = require("mongoose");
const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("goodbye fucking world");
});

app.get("/getto", (req, res) => {
  res.send("goodbye");
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda calisiyor.`);
});
