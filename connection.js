const mongoose = require("mongoose");
const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `${__dirname}/.env.${ENV}`,
});

if (!process.env.MONGO_URL) {
  throw new Error("MONGO_URL not set");
}

const { MONGO_URL } = process.env;

console.log("URL:", MONGO_URL);

mongoose.connect(MONGO_URL).catch((err) => {
  console.error(err);
});

module.exports = mongoose;
