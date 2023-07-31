const express = require("express");

const {
  getCrops,
  getCrop,
  createCrop,
  updateCrop,
  deleteCrop,
} = require("../controllers/controller-crop");

const cropRouter = express.Router();

cropRouter.route("/").get(getCrops).post(createCrop);

cropRouter.route("/:id").get(getCrop).patch(updateCrop).delete(deleteCrop);

module.exports = cropRouter;
