const mongoose = require("../connection");

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
  username: {
    type: String,
    required: true,
  },
  item_img: {
    type: String,
  },
  item_type: {
    type: String,
  },
  stage_1_img: {
    type: String,
  },
  stage_2_img: {
    type: String,
  },
  stage_3_img: {
    type: String,
  },
  reference: {
    type: String,
  },
  hunger: {
    type: Number,
  },
});

const ShopItem = mongoose.model("ShopItem", shopItemSchema);

module.exports = ShopItem;
