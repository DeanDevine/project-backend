const Crop = require("../models/model-shop-item");
const User = require("../models/model-user");
const asyncHandler = require("express-async-handler");

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

// GET USER BY ID // OR USERNAME

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

const createUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

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

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOneAndDelete({ username });
    if (!user) {
      res.status(404);
      throw new Error(`User ${username} not found`);
    }
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
