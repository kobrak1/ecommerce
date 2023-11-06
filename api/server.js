const express = require("express");
const { default: mongoose } = require("mongoose");
const port = 5000;
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kobrak1:altoBrawn1@e-commerce-z.z9n10dq.mongodb.net/"
    );
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
