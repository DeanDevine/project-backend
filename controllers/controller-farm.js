const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler
const Farm = require("../models/model-farm");

// GET ALL GRID SQUARES

const getGridSquares = asyncHandler(async (req, res) => {
  const gridSquares = await Farm.find({});
  try {
    res.status(200).json({ gridSquares });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

const updateGridSquare = asyncHandler(async (req, res) => {
  try {
    const { grid_square } = req.params;
    const body = req.body;
    const gridSquare = await Farm.findOneAndUpdate(
      { grid_square },
      { $set: body },
      { new: true }
    );
    if (!gridSquare) {
      res.status(404);
      throw new Error(`User ${gridSquare} not found`);
    }
    res.status(200).json({ gridSquare });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = { getGridSquares, updateGridSquare };
