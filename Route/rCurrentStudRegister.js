const express = require("express");

const router = express.Router();
// const mCustomer = require("../Model/mCustomer");
const mCurrentStudRegister = require("../Model/mCurrentStudRegister");



router.post("/currentStudentRegister", function (req, res) {
  console.log(req.body);
  let currentStudentRegister = new mCurrentStudRegister();

  currentStudentRegister.name = req.body.name;
  currentStudentRegister.email = req.body.email; 
  currentStudentRegister.department = req.body.department; 
  currentStudentRegister.password = req.body.password; 
  currentStudentRegister.confirmPassword = req.body.confirmPassword; 
  currentStudentRegister.currentStudent = req.body.currentStudent; 

  currentStudentRegister.save((err, docs) => {
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

