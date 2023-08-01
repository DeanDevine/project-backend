const express = require("express");

const {
  getUserItems,
  getUserItem,
  createUserItem,
  updateUserItem,
  deleteUserItem,
} = require("../controllers/controller-user-item");

const userItemRouter = express.Router();

userItemRouter.route("/").get(getUserItems).post(createUserItem);

userItemRouter
  .route("/:id")
  .get(getUserItem)
  .patch(updateUserItem)
  .delete(deleteUserItem);

module.exports = userItemRouter;
