const express = require("express");
const mStudfnlYr = require("../Model/mStudfnlYr");

const router = express.Router();
// const mProduct = require("../Model/mStudfnlYr");
// const tamil = require("../models/mModels");

router.post("/finalYrStud", function (req, res) {
  console.log(req.body);
  let StudFnlYr = new mStudfnlYr();

  StudFnlYr.studentName = req.body.studentName;
  StudFnlYr.email = req.body.email;
  StudFnlYr.departmentName = req.body.departmentName;
  StudFnlYr.selectSection = req.body.selectSection;
  StudFnlYr.password = req.body.password;
  StudFnlYr.confirmationPassword = req.body.confirmationPassword;
  
  StudFnlYr.save((err, docs) => {
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
