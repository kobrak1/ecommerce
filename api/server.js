const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    console.log("Trying to connect to mongoDB");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDb");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

// middlewares
app.use(express.json());

app.use("/api", mainRoute);

app.listen(port, async () => {
  await connect();
  console.log(`Server runs at port ${port}`);
});