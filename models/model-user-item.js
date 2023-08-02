const mongoose = require("../connection");

const userItemSchema = mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  username: {
    type: String,
  },
});

const UserItem = mongoose.model("UserItem", userItemSchema);

module.exports = UserItem;
