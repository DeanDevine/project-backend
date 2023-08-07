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
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
