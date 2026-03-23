const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    productId: String,
    quantity: Number,
    userId: String
});

module.exports = mongoose.model("Cart", cartSchema);