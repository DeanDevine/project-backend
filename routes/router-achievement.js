const express = require("express");

const {
  getAchievements,
  updateAchievement,
} = require("../controllers/controller-achievement");

const achievementRouter = express.Router();

achievementRouter.route("/:username").get(getAchievements);

achievementRouter.route("/:username/:achievement").patch(updateAchievement);

module.exports = achievementRouter;
