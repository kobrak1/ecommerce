const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const port = 5000;
const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {}
};

app.get("/", (req, res) => {
  res.send("goodbye fucking world");
});

app.get("/getto", (req, res) => {
  res.send("goodbye");
});

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} portunda calisiyor.`);
});
