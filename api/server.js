const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
const path = require("path"); // Import the 'path' module
const app = express();
const mainRoute = require("./routes/index.js");
const port = process.env.PORT || 5000; // Use the provided PORT or default to 5000

dotenv.config();

const connect = async () => {
  console.log("Connecting");
  try {
    console.log("Connecting to mongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
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

// Serve static assets (React build) if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client"));

  // Serve the React app's HTML file for any other routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
  });
}

app.listen(port, async () => {
  await connect();
  console.log(`Server runs at port ${port}`);
});
