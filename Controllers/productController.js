const Product = require("../Models/Product");

exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};

exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).send("Product not found");

    res.json(product);
};