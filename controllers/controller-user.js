const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler
const User = require("../models/model-user");
const ShopItem = require("../models/model-shop-item");
const UserItem = require("../models/model-user-item");
const Farm = require("../models/model-farm");
const Achievement = require("../models/model-achievement");
const {
  newUserShopItems,
  newUserUserItems,
  newUserFarm,
  newUserAchievements,
} = require("../data/development/new-user-data");

// GET ALL USERS

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  try {
    res.status(200).json({ users });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

// GET USER BY USERNAME

const getUser = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.find({ username });
    if (!user.length) {
      res.status(404);
      throw new Error(`User ${username} not found`);
    }
    res.status(200).json({ user: user[0] });
  } catch (err) {
    throw new Error(err);
  }
});

// POST NEW USER

const createUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.create(req.body);
    await ShopItem.insertMany(newUserShopItems(user));
    await UserItem.insertMany(newUserUserItems(user));
    await Farm.insertMany(newUserFarm(user));
    await Achievement.insertMany(newUserAchievements(user));
    res.status(201).json({ user });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

// PATCH USER BY USERNAME

const updateUser = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;
    const body = req.body;
    const user = await User.findOneAndUpdate(
      { username },
      { $set: body },
      { new: true }
    );
    if (!user) {
      res.status(404);
      throw new Error(`User ${username} not found`);
    }
    res.status(200).json({ user });
  } catch (err) {
    throw new Error(err);
  }
});

// DELETE USER BY USERNAME

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOneAndDelete({ username });
    if (!user) {
      res.status(404);
      throw new Error(`User ${username} not found`);
    }
    await ShopItem.deleteMany({ username });
    await UserItem.deleteMany({ username });
    await Farm.deleteMany({ username });
    await Achievement.deleteMany({ username });
    res.status(204).send();
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
