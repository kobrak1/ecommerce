const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

// Add a new product (Create)
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Get a specific product (Read - Single)
router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    try {
      const product = await Product.findById(productId);

      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Product not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Update a specific product
router.put("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const updates = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updates,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Delete a specific product
router.delete("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.status(200).json(deletedProduct);
    console.log('Data deleted');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
