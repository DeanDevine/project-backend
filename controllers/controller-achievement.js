const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler
const User = require("../models/model-user");
const Achievement = require("../models/model-achievement");

// GET GRID SQUARES BY USERNAME

const getAchievements = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.find({ username });
    if (!user.length) {
      throw new Error(`${username} not found`);
    }
    const achievements = await Achievement.find({ username });
    if (!achievements.length) {
      throw new Error(`ERROR`); // CHANGE ERROR
    }
    res.status(200).json({ achievements });
  } catch (err) {
    throw new Error(err);
  }
});

// PATCH GRID SQUARE BY USERNAME AND GRID_SQUARE

const updateAchievement = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.params;
    const body = req.body;
    const achievement = await Achievement.findOneAndUpdate(
      { _id },
      { $set: body },
      { new: true }
    );
    if (!achievement) {
      res.status(404);
      throw new Error(`${achievement} not found`);
    }
    res.status(200).json({ achievement });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = { getAchievements, updateAchievement };
