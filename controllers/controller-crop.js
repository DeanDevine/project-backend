const Crop = require("../models/model-crop");
const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler

// GET ALL CROPS

const getCrops = asyncHandler(async (req, res) => {
  try {
    const crops = await Crop.find({});
    res.status(200).json(crops);
  } catch (err) {
    res.status(500);
    throw new Error(err.message); // WITH ERROR MIDDLEWARE
    // res.status(500).json({ message: err.message }); // WITHOUT ERROR MIDDLEWARE
  }
});

// GET CROP BY ID

const getCrop = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const crop = await Crop.findById(id);
    // ID NOT IN DATABASE
    if (!crop) {
      res.status(404);
      throw new Error(`${id} not found`); // WITH ERROR MIDDLEWARE
      // return res.status(404).json({ message: `${id} not found` }); // WITHOUT ERROR MIDDLEWARE
    }
    res.status(200).json(crop);
  } catch (err) {
    throw new Error(err.message);
  }
});

// CREATE NEW CROP

const createCrop = asyncHandler(async (req, res) => {
  try {
    const crop = await Crop.create(req.body);
    res.status(201).json(crop);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

// UPDATE CROP BY ID

const updateCrop = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const crop = await Crop.findByIdAndUpdate(id, req.body);
    if (!crop) {
      res.status(404);
      throw new Error(`${id} not found`);
    }
    const updatedTest = await Crop.findById(id);
    res.status(200).json(updatedTest);
  } catch (err) {
    throw new Error(err.message);
  }
});

// DELETE CROP BY ID

const deleteCrop = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const crop = await Crop.findByIdAndDelete(id);
    // ID NOT IN DATABASE
    if (!crop) {
      res.status(404);
      throw new Error(`${id} not found`);
    }
    res.status(204).json(crop);
  } catch (err) {
    throw new Error(err.message);
  }
});

module.exports = {
  getCrops,
  getCrop,
  createCrop,
  updateCrop,
  deleteCrop,
};
