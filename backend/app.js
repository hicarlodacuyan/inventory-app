const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./utils/config");

const app = express();
const url = config.MONGODB_URI;
const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log(`Connected to DB`);
};

url ? connectToDB(url) : console.log("Error connecting to DB");

app.use(cors());

module.exports = app;
