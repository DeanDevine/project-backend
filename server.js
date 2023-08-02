require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
//const mongoose = require("./connection.js")
const errorMiddleware = require("./middleware/middleware-error");
const shopItemRouter = require("./routes/router-shop-item");
const userRouter = require("./routes/router-user");
const userItemRouter = require("./routes/router-user-item");
const cors = require("cors"); // npm i cors - NEED TO LOAD DATA FOR FRONT END?
const { getApi } = require("./controllers/controller-api");

const app = express();


// const PORT = process.env.PORT || 3000;
//const MONGO_URL = require("./connection.js")  //Check Which MONGO_URL should be get, test or development or  production
//const MONGO_URL = process.env.MONGO_URL;

//console.log("Show {Server.js} env-->",process.env.NODE_ENV )

// MIDDLEWAREs

app.use(cors()); // NEED FOR FRONT END??

app.use(express.json());

// ROUTES

app.get("/api", getApi);

app.use("/api/users", userRouter);

app.use("/api/shopitems", shopItemRouter);

app.use("/api/useritems", userItemRouter);

app.use(errorMiddleware);

// DATABASE CONNECTION


//mongoose.connect(MONGO_URL);

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
