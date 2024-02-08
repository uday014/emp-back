const express = require("express");
const mongoose = require("./db");
const bodyparser = require("body-parser");
var emproute = require("./Routes/emproute");
var app = express();
const cors = require("cors");

app.use(cors());

var Router = express.Router();

app.use(bodyparser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // Replace with your frontend's URL
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", emproute);

const port = 3300;

app.listen(port, () => {
  console.log("server on port " + port);
});
