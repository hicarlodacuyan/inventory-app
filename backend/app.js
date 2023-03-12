const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./utils/config");
const itemRouter = require("./routes/itemRoutes");
const categoryRouter = require("./routes/categoryRoutes");

const app = express();
const url = config.MONGODB_URI;
const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log(`Connected to DB`);
};

url ? connectToDB(url) : console.log("Error connecting to DB");

app.use(cors());
app.use(express.json());
app.use("/api/items", itemRouter);
app.use("/api/categories", categoryRouter);
app.use(express.static(path.join(__dirname, "dist")));

module.exports = app;
