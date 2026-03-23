const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

connectDB();

app.use("/products", require("./routes/productRoutes"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/", require("./routes/authRoutes"));

app.listen(5100, () => {
    console.log("Server running on port 5100");
});