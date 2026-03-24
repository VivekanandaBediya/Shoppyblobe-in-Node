const Product = require("../Models/Product");

// Create the products 
exports.createProducts = async (req, res) => {
    try {
        const { name, price, description, stock } = req.body;

        // Validation
        if (!name || !price) {
            return res.status(400).send("Name and Price are required");
        }

        const product = new Product({name,price,description,stock});

        await product.save();

        res.status(201).json({
            message: "Product saved successfully",
            product
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

// get the all products from database 
exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};

// get the particular product by their id 
exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).send("Product not found");

    res.json(product);
};