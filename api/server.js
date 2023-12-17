const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
const app = express();
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();

// const connect = async () => {
//   console.log("Connecting");
//   try {
//     console.log("Connecting to mongoDB...");
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to mongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1);
//   }
//   console.log("connected");
// };

const connect = async () => {
  console.log("Connecting");
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
  console.log("Connected");
};

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", mainRoute);

app.listen(port, async () => {
  await connect();
  console.log(`Server runs at port ${port}`);
});
