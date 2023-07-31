const express = require("express");

const {
  getShopItems,
  getShopItem,
  createShopItem,
  updateShopItem,
  deleteShopItem,
} = require("../controllers/controller-shop-item");

const userItemRouter = express.Router();

userItemRouter.route("/").get(getShopItems).post(createShopItem);

userItemRouter.route("/:id")
  .get(getShopItem)
  .patch(updateShopItem)
  .delete(deleteShopItem);

module.exports = userItemRouter;
