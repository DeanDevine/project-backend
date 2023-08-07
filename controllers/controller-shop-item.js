const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler
const ShopItem = require("../models/model-shop-item");
const User = require("../models/model-user");

// GET SHOP ITEMS BY USERNAME

const getShopItems = asyncHandler(async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.find({ username });
    if (!user.length) {
      throw new Error(`${username} not found`);
    }
    const shopItems = await ShopItem.find({ username });
    if (!shopItems.length) {
      throw new Error(`ERROR`); // CHANGE ERROR
    }
    res.status(200).json({ items: shopItems });
  } catch (err) {
    throw new Error(err);
  }
});

// GET SHOP ITEM BY USERNAME AND ITEM_NAME

const getShopItem = asyncHandler(async (req, res) => {
  try {
    const { username, item_name } = req.params;
    const shopItem = await ShopItem.find({ username, item_name });
    if (!shopItem.length) {
      res.status(404);
      throw new Error(`${username} or ${item_name} not found`);
    }
    res.status(200).json({ item: shopItem });
  } catch (err) {
    throw new Error(err);
  }
});

// POST NEW SHOP ITEM

const createShopItem = asyncHandler(async (req, res) => {
  try {
    const shopItem = await ShopItem.create(req.body);
    res.status(201).json({ item: shopItem });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }
});

// PATCH SHOP ITEM BY USERNAME AND ITEM_NAME

const updateShopItem = asyncHandler(async (req, res) => {
  try {
    const { username, item_name } = req.params;
    let { price, quantity } = req.body;
    const shopItem = await ShopItem.findOneAndUpdate(
      { username, item_name },
      { $inc: { price, quantity } },
      { new: true }
    );
    if (!shopItem) {
      res.status(404);
      throw new Error(`${username} or ${item_name} not found`);
    }
    res.status(200).json({ item: shopItem });
  } catch (err) {
    throw new Error(err);
  }
});

// DELETE SHOP ITEM BY USERNAME AND ITEM_NAME

const deleteShopItem = asyncHandler(async (req, res) => {
  try {
    const { username, item_name } = req.params;
    const shopItem = await ShopItem.findOneAndDelete({ username, item_name });
    if (!shopItem) {
      res.status(404);
      throw new Error(`${username} or ${item_name} not found`);
    }
    res.status(204).send();
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  getShopItems,
  getShopItem,
  createShopItem,
  updateShopItem,
  deleteShopItem,
};
