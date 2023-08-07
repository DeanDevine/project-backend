const Farm = require("./models/model-farm");
const ShopItem = require("./models/model-shop-item");
const User = require("./models/model-user");
const UserItem = require("./models/model-user-item");

const seed = async ({ seedUsers, seedUserItems, seedShopItems, seedFarm }) => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
  await UserItem.deleteMany({});
  await UserItem.insertMany(seedUserItems);
  await ShopItem.deleteMany({});
  await ShopItem.insertMany(seedShopItems);
  await Farm.deleteMany({});
  await Farm.insertMany(seedFarm);
};

module.exports = seed;
