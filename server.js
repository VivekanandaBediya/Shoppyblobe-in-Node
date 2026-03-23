const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Routes
app.use("/products", require("./routes/productRoutes"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/", require("./routes/authRoutes"));

// DB Connection
mongoose.connect("mongodb://localhost:27017/shoppyglobe")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server
app.listen(5100, () => {
    console.log("Server running on port 5100");
});