require("dotenv").config();
const mongoose = require("mongoose");
const Crop = require("./models/model-crop");
const User = require("./models/model-user");

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Seeding Database...");
  })
  .catch((err) => {
    console.log(err);
  });

const seedCrops = [
  {
    name: "Carrot",
    description: "It's orange",
    quantity: 1,
    field4: "",
  },
  {
    name: "Pumpkin",
    description: "It's also orange",
    quantity: 3,
    field4: "",
  },
  {
    name: "Wheat",
    description: "Good for cereal",
    quantity: 0,
  },
  {
    name: "Oat",
    description: "Used for making porridge",
    quantity: 5,
    field4: "",
  },
];

const seedUsers = [
  {
    username: "Dean",
    password: "password1",
  },
  {
    username: "Dennis",
    password: "password2",
  },
  {
    username: "Steven",
    password: "password3",
  },
  {
    username: "Hannah",
    password: "password4",
  },
  {
    username: "Lucy",
    password: "password5",
  },
];

const seedDB = async () => {
  await Crop.deleteMany({});
  await Crop.insertMany(seedCrops);
  await User.deleteMany({});
  await User.insertMany(seedUsers);
};

seedDB().then(() => {
  console.log("Database Seeded");
  mongoose.connection.close();
});
