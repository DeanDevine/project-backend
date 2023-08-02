const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler
const ShopItem = require("../models/model-shop-item");
const User = require("../models/model-user");

// GET ALL SHOP ITEMS

const getShopItems = asyncHandler(async (req, res) => {
  try {
    const shopItems = await ShopItem.find({});
    res.status(200).json({ items: shopItems });
  } catch (err) {
    res.status(500);
    throw new Error(err); // WITH ERROR MIDDLEWARE
    // res.status(500).json({ message: err.message }); // WITHOUT ERROR MIDDLEWARE
  }
});

// GET SHOP ITEMS BY USERNAME

const getShopItemsByUser = asyncHandler(async (req, res) => {
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

// GET SHOP ITEM BY ITEM ID

const getShopItem = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const shopItem = await ShopItem.findById(id);
    if (!shopItem) {
      res.status(404);
      throw new Error(`${id} not found`);
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

// PATCH SHOP ITEM BY ITEM ID

const updateShopItem = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const shopItem = await ShopItem.findByIdAndUpdate(id, req.body);
    if (!shopItem) {
      res.status(404);
      throw new Error(`${id} not found`);
    }
    const updatedItem = await ShopItem.findById(id);
    res.status(200).json({ item: updatedItem });
  } catch (err) {
    throw new Error(err);
  }
});

// DELETE SHOP ITEM BY ITEM ID

const deleteShopItem = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const shopItem = await ShopItem.findByIdAndDelete(id);
    if (!shopItem) {
      res.status(404);
      throw new Error(`${id} not found`);
    }
    res.status(204).send();
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = {
  getShopItems,
  getShopItemsByUser,
  getShopItem,
  createShopItem,
  updateShopItem,
  deleteShopItem,
};
