const productModel = require("../models/productModel");

//Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await productModel.find({}); //take all data from api request
  res.json({
    success: true,
    products,
  });
};

//Get Single Products API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Unable to get Product with that ID",
    });
  }
};
