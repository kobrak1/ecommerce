const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const mainRoute = require("./routes/index.js");
const port = 5000;
const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("An error occured:", error.message);
  }
};

app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} portunda calisiyor.`);
});
