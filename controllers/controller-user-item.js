const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler
const UserItem = require("../models/model-user-item");
const User = require("../models/model-user");

// GET USER ITEMS BY USERNAME

const getUserItems = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;
    const { item_type } = req.query;
    const user = await User.find({ username });
    if (!user.length) {
      throw new Error(`${username} not found`);
    }
    let userItems;
    if (item_type) {
      userItems = await UserItem.find({ username, item_type });
    } else {
      userItems = await UserItem.find({ username });
    }
    if (!userItems.length) {
      throw new Error(`ERROR`); // CHANGE ERROR
    }
    res.status(200).json({ items: userItems });
  } catch (err) {
    throw new Error(err);
  }
});

// GET USER ITEM BY USERNAME AND ITEM_NAME

const getUserItem = asyncHandler(async (req, res) => {
  try {
    const { username, item_name } = req.params;
    const userItem = await UserItem.find({ username, item_name });
    if (!userItem.length) {
      res.status(404);
      throw new Error(`${username} or ${item_name} not found`);
    }
    res.status(200).json({ item: userItem });
  } catch (err) {
    throw new Error(err);
  }
});

// POST NEW USER ITEM

const createUserItem = asyncHandler(async (req, res) => {
  try {
    const userItem = await UserItem.create(req.body);
    res.status(201).json({ item: userItem });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

// PATCH USER ITEM BY USERNAME AND ITEM_NAME

const updateUserItem = asyncHandler(async (req, res) => {
  try {
    const { username, item_name } = req.params;
    let { price, quantity } = req.body;
    const userItem = await UserItem.findOneAndUpdate(
      { username, item_name },
      { $inc: { price, quantity } },
      { new: true }
    );
    if (!userItem) {
      res.status(404);
      throw new Error(`${username} or ${item_name} not found`);
    }
    res.status(200).json({ item: userItem });
  } catch (err) {
    throw new Error(err);
  }
});

// DELETE USER ITEM BY USERNAME AND ITEM_NAMTEM IDE

const deleteUserItem = asyncHandler(async (req, res) => {
  try {
    const { username, item_name } = req.params;
    const userItem = await UserItem.findOneAndDelete({ username, item_name });
    if (!userItem) {
      res.status(404);
      throw new Error(`${username} or ${item_name} not found`);
    }
    res.status(204).send();
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  getUserItems,
  getUserItem,
  createUserItem,
  updateUserItem,
  deleteUserItem,
};
