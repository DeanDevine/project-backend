require("dotenv").config();
const mongoose = require("mongoose");
const ShopItem = require("./models/model-shop-item");
const User = require("./models/model-user");
const UserItem = require("./models/model-user-items");

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Seeding Database...");
  })
  .catch((err) => {
    console.log(err);
  });

const seedShopItems = [
  {
    item_name: "item name 1",
    description: "item description 1",
    price: 1,
    quantity: 0,
  },
  {
    item_name: "item name 2",
    description: "item description 2",
    price: 5,
    quantity: 1,
  },
  {
    item_name: "item name 3",
    description: "item description 3",
    price: 3,
    quantity: 2,
  },
  {
    item_name: "item name 4",
    description: "item description 4",
    price: 2,
    quantity: 3,
  },
  {
    item_name: "item name 5",
    description: "item description 5",
    price: 10,
    quantity: 7,
  },
];

const seedUsers = [
  {
    username: "Dean",
    password: "password1",
    first_name: "first",
    last_name: "last",
  },
  {
    username: "Dennis",
    password: "password2",
    first_name: "first",
    last_name: "last",
  },
  {
    username: "Steven",
    password: "password3",
    first_name: "first",
    last_name: "last",
  },
  {
    username: "Hannah",
    password: "password4",
    first_name: "first",
    last_name: "last",
  },
  {
    username: "Lucy",
    password: "password5",
    first_name: "first",
    last_name: "last",
  },
];

const seedUserItems = [
  {
    item_name: "ITEM 1",
    description: "item description 1",
    price: 0,
    quantity: 0,
  },
  {
    item_name: "ITEM 2",
    description: "item description 2",
    price: 1,
    quantity: 1,
  },
  {
    item_name: "ITEM 3",
    description: "item description 3",
    price: 2,
    quantity: 2,
  },
  {
    item_name: "ITEM 4",
    description: "item description 4",
    price: 1,
    quantity: 2,
  },
  {
    item_name: "ITEM 5",
    description: "item description 5",
    price: 1,
    quantity: 2,
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUsers);
  await ShopItem.deleteMany({});
  await ShopItem.insertMany(seedShopItems);
  await UserItem.deleteMany({});
  await UserItem.insertMany(seedUserItems);
};

seedDB().then(() => {
  console.log("Database Seeded");
  mongoose.connection.close();
});
