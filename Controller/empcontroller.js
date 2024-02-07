var Emp = require("../Model/employee");

const adduser = (req, res) => {
  var emp = new Emp({
    name: req.body.name,
    candidate: req.body.candidate,
    shift: req.body.shift,
    password: req.body.password,
    conpassword: req.body.conpassword,
  });
  emp.save((err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

const getAll = (req, res) => {
  Emp.find((err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

const deleteId = (req, res) => {
  Emp.findByIdAndDelete(req.params.id, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

const getbyId = (req, res) => {
  Emp.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};

const Login = (req, res) => {
  const user = req.body.name;
  Emp.findOne({ name: user }).then((result) => {
    if (result) {
      if (result.password == req.body.password) {
        res.json({
          message: "login successfull",
        });
      } else {
        res.json({
          message: "password not match",
        });
      }
    } else {
      res.json({
        message: "user not found",
      });
    }
  });
};

const editUser = (req, res) => {
  console.log("hellllllllll");
  Emp.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      candidate: req.body.candidate,
      shift: req.body.shift,
      password: req.body.password,
      conpassword: req.body.conpassword,
    },
    (err, docs) => {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    }
  );
};

module.exports = { adduser, getAll, deleteId, getbyId, editUser, Login };
