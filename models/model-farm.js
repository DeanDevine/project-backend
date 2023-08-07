const mongoose = require("../connection");

const farmSchema = mongoose.Schema({
  grid_square: {
    type: Number,
    required: true,
  },
  planted: {
    type: Boolean,
  },
  state: {
    type: String,
  },
  stage: {
    type: Number,
  },
  username: {
    type: String,
  }
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
