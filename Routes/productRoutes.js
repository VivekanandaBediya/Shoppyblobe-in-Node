const express = require("express");
const Product = require("../Models/Product");

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// GET single product
router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).send("Product not found");

    res.json(product);
});

module.exports = router;