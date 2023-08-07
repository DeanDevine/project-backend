const express = require("express");

const {
  getUserItems,
  getUserItem,
  createUserItem,
  updateUserItem,
  deleteUserItem,
} = require("../controllers/controller-user-item");

const userItemRouter = express.Router();

userItemRouter.route("/").post(createUserItem);

userItemRouter.route("/:username").get(getUserItems);

userItemRouter
  .route("/:username/:item_name")
  .get(getUserItem)
  .patch(updateUserItem)
  .delete(deleteUserItem);

module.exports = userItemRouter;
