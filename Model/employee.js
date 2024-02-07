const mongoose = require("mongoose");

const Emp = mongoose.model("employee", {
  name: { type: String },
  candidate: { type: String },
  shift: { type: String },
  password: { type: String },
  conpassword: { type: String },
});

module.exports = Emp;
