const express = require("express");

const {
  getCrops,
  getCrop,
  createCrop,
  updateCrop,
  deleteCrop,
} = require("../controllers/controller-crop");

const cropRouter = express.Router();

cropRouter.get("/", getCrops);

cropRouter.get("/:id", getCrop);

cropRouter.post("/", createCrop);

cropRouter.patch("/:id", updateCrop);

cropRouter.delete("/:id", deleteCrop);

module.exports = cropRouter;
