const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

// Add a new category (Create)
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
