const express = require("express");
const Cart = require("../Models/Cart");
const Product = require("../Models/Product");
const auth = require("../Middlewares/authMiddleware");

const router = express.Router();

// Add to cart
router.post("/", auth, async (req, res) => {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).send("Product not found");

    const cart = new Cart({
        productId,
        quantity,
        userId: req.user.id
    });

    await cart.save();

    res.status(201).send("Added to cart");
});

// Update cart
router.put("/:id", auth, async (req, res) => {
    const { quantity } = req.body;

    const cart = await Cart.findByIdAndUpdate(
        req.params.id,
        { quantity },
        { new: true }
    );

    res.json(cart);
});

// Delete cart item
router.delete("/:id", auth, async (req, res) => {
    await Cart.findByIdAndDelete(req.params.id);
    res.send("Item removed");
});

module.exports = router;