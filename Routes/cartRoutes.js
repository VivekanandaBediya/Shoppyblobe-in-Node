const express = require("express");
const router = express.Router();
const controller = require("../Controllers/cartController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, controller.addToCart);
router.put("/:id", auth, controller.updateCart);
router.delete("/:id", auth, controller.deleteCart);

module.exports = router;