const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

// Add a new coupon
router.post("/", async (req, res) => {
  try {
    const { code } = req.body;

    const existingCoupon = await Coupon.findOne({ code });

    if (existingCoupon) {
      return res.status(400).json({ error: "This coupon is alread exists." });
    }

    const newCoupon = new Coupon(req.body);
    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Get all coupons
router.get("/", async (req, res) => {
  try {
    const categories = await Coupon.find();

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Get a specific coupon
router.get("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    try {
      const coupon = await Coupon.findById(couponId);

      res.status(200).json(coupon);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Coupon not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Update a specific coupon
router.put("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updates = req.body;

    const updatedCoupon = await Coupon.findByIdAndUpdate(
      couponId,
      updates,
      { new: true }
    );
    res.status(200).json(updatedCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Delete a specific coupon
router.delete("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    const deletedCoupon = await Coupon.findByIdAndDelete(couponId);

    if (!deletedCoupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }

    res.status(200).json(deletedCoupon);
    console.log("Data deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
