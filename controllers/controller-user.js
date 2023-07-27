const User = require("../models/model-user");
const asyncHandler = require("express-async-handler");

// GET ALL USERS

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  try {
    res.status(200).json(users);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

// GET USER BY ID // OR USERNAME

const getUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params; // OR { username }
    const user = await User.findById(id);
    if (!user) {
      res.status(404);
      throw new Error(`User ${id} not found`);
    }
    res.status(200).json(user);
  } catch (err) {
    throw new Error(err.message);
  }
});

const createUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

const updateUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      res.status(404);
      throw new Error(`User ${id} not found`);
    }
    const updatedUser = await User.findById(id);
    req.status(200).json(updatedUser);
  } catch (err) {
    throw new Error(err.message);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404);
      throw new Error(`User ${id} not found`);
    }
    res.status(204).json(user);
  } catch (err) {
    throw new Error(err.messsage);
  }
});

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
