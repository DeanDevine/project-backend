const UserItem = require("../models/model-user-item");
const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler
const User = require("../models/model-user");

// GET ALL User ITEMS

const getUserItems = asyncHandler(async (req, res) => {
  try {
    const userItems = await UserItem.find({});
    res.status(200).json({ items: userItems });
  } catch (err) {
    res.status(500);
    throw new Error(err); // WITH ERROR MIDDLEWARE
    // res.status(500).json({ message: err.message }); // WITHOUT ERROR MIDDLEWARE
  }
});

const getUserItemsByUser = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.find({ username });
    if (!user.length) {
      throw new Error(`${username} not found`);
    }
    const userItems = await UserItem.find({ username });
    if (!userItems.length) {
      throw new Error(`ERROR`); // CHANGE ERROR
    }
    res.status(200).json({ items: userItems });
  } catch (err) {
    throw new Error(err);
  }
});

// GET UserItem BY ID

const getUserItem = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const userItem = await UserItem.findById(id);
    // ID NOT IN DATABASE
    if (!userItem) {
      res.status(404);
      throw new Error(`${id} not found`); // WITH ERROR MIDDLEWARE
      // return res.status(404).json({ message: `${id} not found` }); // WITHOUT ERROR MIDDLEWARE
    }
    res.status(200).json({ item: userItem });
  } catch (err) {
    throw new Error(err);
  }
  tems;
});

// CREATE NEW UserItem

const createUserItem = asyncHandler(async (req, res) => {
  try {
    const userItem = await UserItem.create(req.body);
    res.status(201).json({ item: userItem });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

// UPDATE UserItem BY ID

const updateUserItem = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const userItem = await UserItem.findByIdAndUpdate(id, req.body);
    if (!userItem) {
      res.status(404);
      throw new Error(`${id} not found`);
    }
    const updatedItem = await UserItem.findById(id);
    res.status(200).json({ item: updatedItem });
  } catch (err) {
    throw new Error(err);
  }
});

// DELETE UserItem BY ID

const deleteUserItem = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const userItem = await UserItem.findByIdAndDelete(id);
    // ID NOT IN DATABASE
    if (!userItem) {
      res.status(404);
      throw new Error(`${id} not found`);
    }
    res.status(204).send();
  } catch (err) {
    throw new Error(err);
  }
});

// JOIN ITEM WITH USER ENDPOINT FUNCTIONS

module.exports = {
  getUserItems,
  getUserItemsByUser,
  getUserItem,
  createUserItem,
  updateUserItem,
  deleteUserItem,
};
