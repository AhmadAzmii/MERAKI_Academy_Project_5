const express = require("express");

const {
  addProductToCart,
  getAllCart,
  deleteAllProductFromCart,
  deleteProductCartById,
  decreaseProductQuantity,
  getCartByUserId,
  getCartProductsByUserId,
  getCartIdByUserId
} = require("../controllers/Cart");

const authentication = require("../middlewares/authentication");

const cartRouter = express.Router();

cartRouter.post("/:product_id", authentication, addProductToCart);
cartRouter.get("/:cart_id", authentication, getAllCart);
cartRouter.delete(
  "/:cart_id/products",
  authentication,
  deleteAllProductFromCart
);
cartRouter.delete(
  "/cart/:cart_id/product/:product_id",
  authentication,
  deleteProductCartById
);
cartRouter.post(
  "/decrease/:cart_id/products/:product_id",
  authentication,
  decreaseProductQuantity
);
cartRouter.get("/userCart", authentication, getCartByUserId); //ask the TA about the path
cartRouter.get("/", authentication, getCartProductsByUserId);
cartRouter.get("/cart/userId",authentication,getCartIdByUserId)
module.exports = cartRouter;
