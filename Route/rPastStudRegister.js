const express = require("express");

const router = express.Router();
// const mCustomer = require("../Model/mCustomer");
// const mpastStudRegister = require("../Model/mpastStudRegister");
const mpastStudRegister = require("../Model/mpastStudRegister");



router.post("/pastStudRegister", function (req, res) {
  console.log(req.body);
  let passedOutStudentRegister = new mpastStudRegister();

  passedOutStudentRegister.passedOutStudent = req.body.passedOutStudent;
  passedOutStudentRegister.name = req.body.name;
  passedOutStudentRegister.email = req.body.email;
  passedOutStudentRegister.department = req.body.department;
  passedOutStudentRegister.password = req.body.password;
  passedOutStudentRegister.confirmPassword = req.body.confirmPassword;
  passedOutStudentRegister.yearOfPassing = req.body.yearOfPassing;
  passedOutStudentRegister.batch = req.body.batch;
  passedOutStudentRegister.designation = req.body.designation;
  passedOutStudentRegister.companyName = req.body.companyName;

// 
// 
passedOutStudentRegister.save((err, docs) => {
    if (err) {
        console.log("errre save db");
        res.send(err);
    } else {
        console.log("success save db");
        res.send(docs);
    }
});
});


router.delete('/delete', function (req, res) {
    const _id =  req.body._id;
    mpastStudRegister.remove({_id : _id}, (err,docs)=>{
        if (err) {
            res.status(500).send({ "save": "failed" });
            // res.status(500).json({ output: utils.getApiOutput(null, err) });
        } else {
            res.status(200).send({ "data": null });          
            // res.status(200).json({ output: utils.getApiOutput(docs, null) });
        }
    });
});

// get api
router.get('/getAllUserRegister', function (req, res) {
    mpastStudRegister.find({}, {}, {}, function (err, data) {
        if (err) {
            console.log("error")
            console.log(err)
            res.status(500).send({ "save": "failed" });
        } else {
            console.log("save succ")
            console.log(data);
            res.status(200).send({ "data": data});
            console.log(data,'oooo')
        }
    });
  });

module.exports = router;

