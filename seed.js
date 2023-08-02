const ShopItem = require("./models/model-shop-item");
const User = require("./models/model-user");
const UserItem = require("./models/model-user-item");

const seed = async ({ seedUsers, seedUserItems, seedShopItems }) => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
  await UserItem.deleteMany({});
  await UserItem.insertMany(seedUserItems);
  await ShopItem.deleteMany({});
  await ShopItem.insertMany(seedShopItems);
};

module.exports = seed;
