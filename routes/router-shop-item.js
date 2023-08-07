const express = require("express");

const {
  getShopItems,
  getShopItem,
  createShopItem,
  updateShopItem,
  deleteShopItem,
} = require("../controllers/controller-shop-item");

const shopItemRouter = express.Router();

shopItemRouter.route("/").post(createShopItem);

shopItemRouter.route("/:username").get(getShopItems);

shopItemRouter
  .route("/:username/:item_name")
  .get(getShopItem)
  .patch(updateShopItem)
  .delete(deleteShopItem);

module.exports = shopItemRouter;
