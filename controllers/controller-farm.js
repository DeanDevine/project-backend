const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler
const Farm = require("../models/model-farm");
const User = require("../models/model-user");

// GET GRID SQUARES BY USERNAME

const getGridSquares = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.find({ username });
    if (!user.length) {
      throw new Error(`${username} not found`);
    }
    const gridSquares = await Farm.find({ username });
    if (!gridSquares.length) {
      throw new Error(`ERROR`); // CHANGE ERROR
    }
    res.status(200).json({ gridSquares });
  } catch (err) {
    throw new Error(err);
  }
});

const updateGridSquare = asyncHandler(async (req, res) => {
  try {
    const { username, grid_square } = req.params;
    const body = req.body;
    const gridSquare = await Farm.findOneAndUpdate(
      { username, grid_square },
      { $set: body },
      { new: true }
    );
    if (!gridSquare) {
      res.status(404);
      throw new Error(`${username} or ${gridSquare} not found`);
    }
    res.status(200).json({ gridSquare });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = { getGridSquares, updateGridSquare };
