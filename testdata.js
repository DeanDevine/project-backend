const mongoose = require("mongoose");
const ShopItem = require("./models/model-shop-item");
const User = require("./models/model-user");
const UserItem = require("./models/model-user-item");

let  MONGO_URL = "";

MONGO_URL="mongodb+srv://deandevine:6rU4gQ99zhf8QUAH@cluster0.kyav8tf.mongodb.net/DEVELOPMENT_DATABASE?retryWrites=true&w=majority"
//MONGO_URL="mongodb+srv://deandevine:6rU4gQ99zhf8QUAH@cluster0.kyav8tf.mongodb.net/TEST-COLLECTION?retryWrites=true&w=majority"


mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Seeding Database...");
  })
  .catch((err) => {
    console.log(err);
  });

 User.find({}) 
 .then ((body) => {
    console.log("Body---->",body)
 })
 .finally (() => {
     mongoose.connection.close();
 })

