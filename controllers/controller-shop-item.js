const ShopItem = require("../models/model-shop-item");
const asyncHandler = require("express-async-handler"); // https://www.npmjs.com/package/express-async-handler

// GET ALL SHOP ITEMS

const getShopItems = asyncHandler(async (req, res) => {
  try {
    const shopItems = await ShopItem.find({});
    res.status(200).json(shopItems);
  } catch (err) {
    res.status(500);
    throw new Error(err.message); // WITH ERROR MIDDLEWARE
    // res.status(500).json({ message: err.message }); // WITHOUT ERROR MIDDLEWARE
  }
});

// GET ShopItem BY ID

const getShopItem = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const shopItem = await ShopItem.findById(id);
    // ID NOT IN DATABASE
    if (!shopItem) {
      res.status(404);
      throw new Error(`${id} not found`); // WITH ERROR MIDDLEWARE
      // return res.status(404).json({ message: `${id} not found` }); // WITHOUT ERROR MIDDLEWARE
    }
    res.status(200).json(shopItem);
  } catch (err) {
    throw new Error(err.message);
  }
});

// CREATE NEW ShopItem

const createShopItem = asyncHandler(async (req, res) => {
  try {
    const shopItem = await ShopItem.create(req.body);
    res.status(201).json(shopItem);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

// UPDATE ShopItem BY ID

const updateShopItem = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const shopItem = await ShopItem.findByIdAndUpdate(id, req.body);
    if (!shopItem) {
      res.status(404);
      throw new Error(`${id} not found`);
    }
    const updatedTest = await ShopItem.findById(id);
    res.status(200).json(updatedTest);
  } catch (err) {
    throw new Error(err.message);
  }
});

// DELETE ShopItem BY ID

const deleteShopItem = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const shopItem = await ShopItem.findByIdAndDelete(id);
    // ID NOT IN DATABASE
    if (!shopItem) {
      res.status(404);
      throw new Error(`${id} not found`);
    }
    res.status(204).json(shopItem);
  } catch (err) {
    throw new Error(err.message);
  }
});

// JOIN ITEM WITH USER ENDPOINT FUNCTIONS

module.exports = {
  getShopItems,
  getShopItem,
  createShopItem,
  updateShopItem,
  deleteShopItem,
};
