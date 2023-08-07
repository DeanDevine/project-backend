const mongoose = require("../connection");

const achievementSchema = mongoose.Schema({
  achievement_name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  progress: {
    type: Number,
  },
  acquired: {
    type: Boolean,
  },
  date: {
    type: String,
  },
  username: {
    type: String,
  },
});

const Achievement = mongoose.model("Achievement", achievementSchema);

module.exports = Achievement;
