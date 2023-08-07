const express = require("express");
const {
  getGridSquares,
  updateGridSquare,
} = require("../controllers/controller-farm");

const farmRouter = express.Router();

farmRouter.route("/").get(getGridSquares);

farmRouter.route("/:grid_square").patch(updateGridSquare);

module.exports = farmRouter;
