require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cropRouter = require("./routes/router-crop");
const errorMiddleware = require("./middleware/middleware-error");
const userRouter = require("./routes/router-user");
// const cors = require('cors') // npm i cors - NEED TO LOAD DATA FOR FRONT END?

const app = express();

// const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// MIDDLEWARE

// app.use(cors()) - NEED TO LOAD DATA FOR FRONT END?
app.use(express.json());

// ROUTES

app.use("/api/crops", cropRouter);

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("test /");
  //   throw new Error("test error");
});

app.use(errorMiddleware);

// DATABASE CONNECTION

mongoose
  .connect(MONGO_URL)
  // .then(() => {
  //   console.log("connected to MongoDB (TEST-COLLECTION)");
  //   app.listen(PORT, () => {
  //     console.log(`listening on port ${PORT}`);
  //   });
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

module.exports = app;
