const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

connectDB();

app.use("/", require("./Routes/authRoutes"));
app.use("/products", require("./Routes/productRoutes"));
app.use("/cart", require("./Routes/cartRoutes"));

app.listen(5100, () => {
    console.log("Server running on port 5100");
});