const express = require("express");

const router = express.Router();
// const mCustomer = require("../Model/mCustomer");
const mLogin = require("../Model/mLogin");



router.post("/adminLogin", function (req, res) {
  console.log(req.body);
  let adminLogin = new mLogin();

  adminLogin.userName = req.body.userName;
  adminLogin.password = req.body.password; 
  adminLogin.save((err, docs) => {
    if (err) {
      console.log("errre save db");
      res.send(err);
    } else {
      console.log("success save db");
      res.send(docs);
    }
  });
});


module.exports = router;

