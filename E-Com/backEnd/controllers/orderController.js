const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");

exports.createOrder = (req, res, next) => {
  //console.log(req.body, "DATA");

  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
  ).toFixed(2);
  console.log(amount, "amount");

  res.json({
    success: true,
    message: "Order works!",
  });
};
