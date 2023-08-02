//const mongoose = require("mongoose");

const mongoose = require("./connection.js")

const ShopItem = require("./models/model-shop-item");
const User = require("./models/model-user");
const UserItem = require("./models/model-user-item");

/*
const seedUsers = require("./data/test/users");
const seedUserItems = require("./data/test/usersItems");
const seedShopItems = require("./data/test/shopItems");
*/

// const MONGO_URL = require("./connection.js")  //Check Which MONGO_URL should be get, test or development or  production


//const MONGO_URL = process.env.MONGO_URL;

//console.log("Show {seed.js-} MONGO_URL---->",MONGO_URL)

/*
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Seeding Database...");
  })
  .catch((err) => {
    console.log(err);
  });
*/

console.log(process.env.NODE_ENV);

/*
  mongoose
.connect(MONGO_URL)
.then(() => {
  console.log("Seeding Database...");
})
.catch((err) => {
  console.log(err);
});
*/


const seed = ({seedUsers,seedUserItems,seedShopItems }) => {
   return  User.deleteMany({})
   .then (() => {
     return User.insertMany(seedUsers);
   })
   .then (() => {
     return  UserItem.deleteMany({});
   })
   .then (() => {
    return UserItem.insertMany(seedUserItems);
   })
   .then (() => {
     return ShopItem.deleteMany({});
   })
   .then (() => {
     return ShopItem.insertMany(seedShopItems);
   })


 /*
  const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    await UserItem.deleteMany({});
    await UserItem.insertMany(seedUserItems);
    await ShopItem.deleteMany({});
    await ShopItem.insertMany(seedShopItems);
  };
  
  seedDB();

  
  seedDB().then(() => {
    console.log("Database Seeded");
    mongoose.connection.close();

  });
*/


}

module.exports = seed;