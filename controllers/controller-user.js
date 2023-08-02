const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler
const User = require("../models/model-user");
const ShopItem = require("../models/model-shop-item");

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
    const seed = [
      {
        item_name: "Lemon",
        description: "item description 1",
        price: 1,
        quantity: 0,
        username: user.username,
      },
      {
        item_name: "Orange",
        description: "item description 2",
        price: 5,
        quantity: 1,
        username: user.username,
      },
      {
        item_name: "Apple",
        description: "item description 3",
        price: 3,
        quantity: 2,
        username: user.username,
      },
      {
        item_name: "Banana",
        description: "item description 4",
        price: 2,
        quantity: 3,
        username: user.username,
      },
      {
        item_name: "Grapes",
        description: "item description 5",
        price: 10,
        quantity: 7,
        username: user.username,
      },
    ];
    await ShopItem.insertMany(seed);
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
