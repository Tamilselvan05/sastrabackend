const express = require("express");

const router = express.Router();
// const mCustomer = require("../Model/mCustomer");
const mAdmin = require("../Model/mAdmin");



router.post("/admin", function (req, res) {
  console.log(req.body);
  let userAdmin = new mAdmin();

  userAdmin.currentUserName = req.body.currentUserName;
  userAdmin.newUserName = req.body.newUserName;
  userAdmin.confirmUserName = req.body.confirmUserName;
  userAdmin.currentPassword = req.body.currentPassword;
  userAdmin.newPassword = req.body.newPassword;
  userAdmin.confirmPassword = req.body.confirmPassword;



  userAdmin.save((err, docs) => {
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

