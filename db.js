const mongoose = require("mongoose");

const mongodb_url =
  "mongodb+srv://udayka014:uday123@cluster0.qycazkj.mongodb.net/training";

mongoose.set("strictQuery", true);

mongoose.connect(mongodb_url, (err, docs) => {
  if (!err) {
    console.log("database connected");
  } else {
    console.log(err);
  }
});

module.exports = mongoose;
