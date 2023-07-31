const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/controller-user");

const userRouter = express.Router();

userRouter.route("/").get(getUsers).post(createUser);

userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

userRouter.route("/:id/crops"); // .....

module.exports = userRouter;
