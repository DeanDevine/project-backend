const express = require("express");

const {
  getShopItems,
  getShopItem,
  createShopItem,
  updateShopItem,
  deleteShopItem,
} = require("../controllers/controller-shop-item");

const shopItemRouter = express.Router();

shopItemRouter.route("/").get(getShopItems).post(createShopItem);

shopItemRouter
  .route("/:id")
  .get(getShopItem)
  .patch(updateShopItem)
  .delete(deleteShopItem);

module.exports = shopItemRouter;
