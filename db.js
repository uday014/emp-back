const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://udayka014:udayka014@cluster0.qycazkj.mongodb.net/training",
  (err, docs) => {
    if (!err) {
      console.log("database connected");
    } else {
      console.log(err);
    }
  }
);

module.exports = mongoose;
