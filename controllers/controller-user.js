const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler
const User = require("../models/model-user");
const ShopItem = require("../models/model-shop-item");
const UserItem = require("../models/model-user-item");

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
    const seedShopItems = [
      {
        item_name: "Carrot",
        description: "DESCRIPTION",
        price: 10,
        quantity: 10,
        username: user.username,
        item_img: "URL",
        item_type: "Food",
      },
      {
        item_name: "Pumpkin",
        description: "DESCRIPTION",
        price: 20,
        quantity: 5,
        username: user.username,
        item_img: "URL",
        item_type: "Food",
      },
      {
        item_name: "Wheat",
        description: "DESCRIPTION",
        price: 6,
        quantity: 20,
        username: user.username,
        item_img: "URL",
        item_type: "Food",
      },
      {
        item_name: "Corn",
        description: "DESCRIPTION",
        price: 6,
        quantity: 24,
        username: user.username,
        item_img: "URL",
        item_type: "Food",
      },
      {
        item_name: "Mango Sapling",
        description: "DESCRIPTION",
        price: 6,
        quantity: 20,
        username: user.username,
        item_img: "URL",
        item_type: "Seed",
      },
      {
        item_name: "Cherry Sapling",
        description: "DESCRIPTION",
        price: 5,
        quantity: 20,
        username: user.username,
        item_img: "URL",
        item_type: "Seed",
      },
      {
        item_name: "Apple Sapling",
        description: "DESCRIPTION",
        price: 2,
        quantity: 30,
        username: user.username,
        item_img: "URL",
        item_type: "Seed",
      },
      {
        item_name: "Rice",
        description: "DESCRIPTION",
        price: 10,
        quantity: 30,
        username: user.username,
        item_img: "URL",
        item_type: "Food",
      },
      {
        item_name: "Cooking Oil",
        description: "DESCRIPTION",
        price: 6,
        quantity: 40,
        username: user.username,
        item_img: "URL",
        item_type: "Cooking",
      },
      {
        item_name: "Solar Panel",
        description: "DESCRIPTION",
        price: 100,
        quantity: 4,
        username: user.username,
        item_img: "URL",
        item_type: "Home",
      },
    ];
    const seedUserItems = [
      {
        item_name: "Carrot",
        description: "DESCRIPTION",
        price: 5,
        quantity: 1,
        username: user.username,
        item_img: "URL",
        item_type: "Food",
      },
      {
        item_name: "Pumpkin",
        description: "DESCRIPTION",
        price: 10,
        quantity: 1,
        username: user.username,
        item_img: "URL",
        item_type: "Food",
      },
      {
        item_name: "Wheat",
        description: "DESCRIPTION",
        price: 3,
        quantity: 1,
        username: user.username,
        item_img: "URL",
        item_type: "Food",
      },
      {
        item_name: "Corn",
        description: "DESCRIPTION",
        price: 3,
        quantity: 1,
        username: user.username,
        item_img: "URL",
        item_type: "Food",
      },
      {
        item_name: "Mango Sapling",
        description: "DESCRIPTION",
        price: 3,
        quantity: 1,
        username: user.username,
        item_img: "URL",
        item_type: "Seed",
      },
      {
        item_name: "Cherry Sapling",
        description: "DESCRIPTION",
        price: 5,
        quantity: 1,
        username: user.username,
        item_img: "URL",
        item_type: "Seed",
      },
      {
        item_name: "Apple Sapling",
        description: "DESCRIPTION",
        price: 2,
        quantity: 1,
        username: user.username,
        item_img: "URL",
        item_type: "Seed",
      },
      {
        item_name: "Rice",
        description: "DESCRIPTION",
        price: 5,
        quantity: 1,
        username: user.username,
        item_img: "URL",
        item_type: "Food",
      },
      {
        item_name: "Cooking Oil",
        description: "DESCRIPTION",
        price: 3,
        quantity: 1,
        username: user.username,
        item_img: "URL",
        item_type: "Cooking",
      },
      {
        item_name: "Solar Panel",
        description: "DESCRIPTION",
        price: 50,
        quantity: 0,
        username: user.username,
        item_img: "URL",
        item_type: "Home",
      },
    ];
    await ShopItem.insertMany(seedShopItems);
    await UserItem.insertMany(seedUserItems);
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
