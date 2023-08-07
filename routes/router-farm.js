const express = require("express");

const {
  getGridSquares,
  updateGridSquare,
} = require("../controllers/controller-farm");

const farmRouter = express.Router();

farmRouter.route("/:username").get(getGridSquares);

farmRouter.route("/:username/:grid_square").patch(updateGridSquare);

module.exports = farmRouter;
