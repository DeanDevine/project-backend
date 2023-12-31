const mongoose = require("../connection");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter username"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
  first_name: {
    type: String,
    required: [true, "Please enter first name"],
  },
  last_name: {
    type: String,
    required: [true, "Please enter last name"],
  },
  character_img: {
    type: String,
  },
  coins: {
    type: Number,
    default: 100,
  },
  hunger: {
    type: Number,
    default: 100
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
