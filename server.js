require("dotenv").config();
const express = require("express");
const { getApi } = require("./controllers/controller-api");
const shopItemRouter = require("./routes/router-shop-item");
const userRouter = require("./routes/router-user");
const userItemRouter = require("./routes/router-user-item");
const errorMiddleware = require("./middleware/middleware-error");
const cors = require("cors");
const farmRouter = require("./routes/router-farm");

const app = express();

// MIDDLEWARE

app.use(cors());

app.use(express.json());

// ROUTES

app.get("/api", getApi);

app.use("/api/users", userRouter);

app.use("/api/shopitems", shopItemRouter);

app.use("/api/useritems", userItemRouter);

app.use("/api/farm", farmRouter);

// ERROR MIDDLEWARE

app.use(errorMiddleware);

module.exports = app;
