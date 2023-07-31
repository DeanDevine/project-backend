const mongoose = require("mongoose");

const shopItemSchema = mongoose.Schema({
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
});

const ShopItem = mongoose.model("ShopItem", shopItemSchema);

module.exports = ShopItem;
