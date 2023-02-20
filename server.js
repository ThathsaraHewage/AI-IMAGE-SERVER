require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Initialize DB
require("./config/DBconnect")();

// Middelware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// routes

// define port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
});
