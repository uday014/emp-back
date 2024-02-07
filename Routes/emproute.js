const express = require("express");
const router = express.Router();
const empcontroller = require("../Controller/empcontroller");

router.post("/employee", empcontroller.adduser);

router.get("/employee", empcontroller.getAll);

router.delete("/employee/:id", empcontroller.deleteId);

router.get("/employee/:id", empcontroller.getbyId);

router.put("/employee/:id", empcontroller.editUser);

router.post("/employee/login", empcontroller.Login);

module.exports = router;
