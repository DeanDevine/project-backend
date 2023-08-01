//require("dotenv").config();
const mongoose = require("mongoose");
const ShopItem = require("./models/model-shop-item");
const User = require("./models/model-user");
const UserItem = require("./models/model-user-item");
const seedUsers = require("./data/users");
const seedUserItems = require("./data/usersItems");
const seedShopItems = require("./data/shopItems");



const ENV = process.env.NODE_ENV || 'test';

require('dotenv').config({
  path: `${__dirname}/.env.${ENV}`,
});

console.log(`${__dirname}`)

if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL not set');
} 

const {MONGO_URL} = process.env;

console.log(MONGO_URL
)


return

//const MONGO_URL = process.env.MONGO_URL;
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
