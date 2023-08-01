require("dotenv").config();
const mongoose = require("mongoose");
const ShopItem = require("./models/model-shop-item");
const User = require("./models/model-user");
const UserItem = require("./models/model-user-item");
const seedUsers = require("./Data/users");
const seedUserItems = require("./Data/usersItems");
const seedShopItems = require("./Data/shopItems");

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Seeding Database...");
  })
  .catch((err) => {
    console.log(err);
  });

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
  await UserItem.deleteMany({});
  await UserItem.insertMany(seedUserItems);
  await ShopItem.deleteMany({});
  await ShopItem.insertMany(seedShopItems);
};

seedDB().then(() => {
  console.log("Database Seeded");
  mongoose.connection.close();
});
