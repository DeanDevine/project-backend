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
        item_img: "https://drive.google.com/uc?%export=view&id=16ArW5WNMluQXFg8Tw3Buh14gcvgK1-aI",
        item_type: "Food",
      },
      {
        item_name: "Pumpkin",
        description: "DESCRIPTION",
        price: 20,
        quantity: 5,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1c5aeSwTcjiKslb37oMB1KTzFm9Ax7TCS",
        item_type: "Food",
      },
      {
        item_name: "Wheat",
        description: "DESCRIPTION",
        price: 6,
        quantity: 20,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=11dCOfhpta4n3bd1u-1V1ApvRbHTrANQv",
        item_type: "Food",
      },
      {
        item_name: "Corn",
        description: "DESCRIPTION",
        price: 6,
        quantity: 24,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1nhECBfxjRMEi2tfaR-l6mC34bN6sKKwt",
        item_type: "Food",
      },
      {
        item_name: "Mango Sapling",
        description: "DESCRIPTION",
        price: 6,
        quantity: 20,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1uxtgFp7tF4NDqPIGIB-6ipmZ7vZGVUCM",
        item_type: "Seed",
      },
      {
        item_name: "Cherry Sapling",
        description: "DESCRIPTION",
        price: 5,
        quantity: 20,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1OXziX7CIOVg3OpZ3f47n8jxKdFhCh5xI",
        item_type: "Seed",
      },
      {
        item_name: "Apple Sapling",
        description: "DESCRIPTION",
        price: 2,
        quantity: 30,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1Re9K7UpBK55qfppCUu6fzesin0KWXVIT",
        item_type: "Seed",
      },
      {
        item_name: "Rice",
        description: "DESCRIPTION",
        price: 10,
        quantity: 30,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1-MBnucNftOBduzGd9quLCg8T0mzKzdI2",
        item_type: "Food",
      },
      {
        item_name: "Cooking Oil",
        description: "DESCRIPTION",
        price: 6,
        quantity: 40,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=114u_IyajDYImrCl_cL2bJaYTwNW7AU3b",
        item_type: "Cooking",
      },
      {
        item_name: "Solar Panel",
        description: "DESCRIPTION",
        price: 100,
        quantity: 4,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1hpXALzBTgwGgqmXFfi9lRRS3Zi1rySdt",
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
        item_img: "https://drive.google.com/uc?%export=view&id=16ArW5WNMluQXFg8Tw3Buh14gcvgK1-aI",
        item_type: "Food",
      },
      {
        item_name: "Pumpkin",
        description: "DESCRIPTION",
        price: 10,
        quantity: 1,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1c5aeSwTcjiKslb37oMB1KTzFm9Ax7TCS",
        item_type: "Food",
      },
      {
        item_name: "Wheat",
        description: "DESCRIPTION",
        price: 3,
        quantity: 1,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=11dCOfhpta4n3bd1u-1V1ApvRbHTrANQv",
        item_type: "Food",
      },
      {
        item_name: "Corn",
        description: "DESCRIPTION",
        price: 3,
        quantity: 1,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1nhECBfxjRMEi2tfaR-l6mC34bN6sKKwt",
        item_type: "Food",
      },
      {
        item_name: "Mango Sapling",
        description: "DESCRIPTION",
        price: 3,
        quantity: 1,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1uxtgFp7tF4NDqPIGIB-6ipmZ7vZGVUCM",
        item_type: "Seed",
      },
      {
        item_name: "Cherry Sapling",
        description: "DESCRIPTION",
        price: 5,
        quantity: 1,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1OXziX7CIOVg3OpZ3f47n8jxKdFhCh5xI",
        item_type: "Seed",
      },
      {
        item_name: "Apple Sapling",
        description: "DESCRIPTION",
        price: 2,
        quantity: 1,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1Re9K7UpBK55qfppCUu6fzesin0KWXVIT",
        item_type: "Seed",
      },
      {
        item_name: "Rice",
        description: "DESCRIPTION",
        price: 5,
        quantity: 1,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1-MBnucNftOBduzGd9quLCg8T0mzKzdI2",
        item_type: "Food",
      },
      {
        item_name: "Cooking Oil",
        description: "DESCRIPTION",
        price: 3,
        quantity: 1,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=114u_IyajDYImrCl_cL2bJaYTwNW7AU3b",
        item_type: "Cooking",
      },
      {
        item_name: "Solar Panel",
        description: "DESCRIPTION",
        price: 50,
        quantity: 0,
        username: user.username,
        item_img: "https://drive.google.com/uc?%export=view&id=1hpXALzBTgwGgqmXFfi9lRRS3Zi1rySdt",
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
