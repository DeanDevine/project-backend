const devData = require("./data/development/index.js");
const seed = require("./seed.js");
const mongoose = require("./connection.js");

const runSeed = async () => {
  try {
    await seed(devData);
    console.log("Database seeded with development data");
  } catch (err) {
    console.log("Error when seeding: ", err);
  } finally {
    mongoose.connection.close();
  }
};

runSeed();
