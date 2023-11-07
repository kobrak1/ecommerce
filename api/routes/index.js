const express = require("express");
const router = express.Router();

//  all routes
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");

// define path for each routes
router.use("/categories", categoryRoute);
router.use("/products", productRoute);

module.exports = router;
