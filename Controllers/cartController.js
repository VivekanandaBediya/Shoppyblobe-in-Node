const Cart = require("../Models/Cart");
const Product = require("../Models/Product");

exports.addToCart = async (req, res) => {
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
};

exports.updateCart = async (req, res) => {
    const cart = await Cart.findByIdAndUpdate(
        req.params.id,
        { quantity: req.body.quantity },
        { new: true }
    );

    res.json(cart);
};

exports.deleteCart = async (req, res) => {
    await Cart.findByIdAndDelete(req.params.id);
    res.send("Item removed");
};