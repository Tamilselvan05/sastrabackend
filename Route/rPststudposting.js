const express = require("express");

const router = express.Router();
// const mCustomer = require("../Model/mCustomer");
const mPststudposting = require("../Model/mPststudposting");



router.post("/pststudposting", function (req, res) {
  console.log(req.body);
  let userPastStudPosting = new mPststudposting();
  userPastStudPosting.name = req.body.name;

  userPastStudPosting.title = req.body.title;
  userPastStudPosting.description = req.body.description; 
  userPastStudPosting.save((err, docs) => {
    if (err) {
      console.log("errre save db");
      res.send(err);
    } else {
      console.log("success save db");
      res.send(docs);
    }
  });
});

// get api
router.get('/getAllUser', function (req, res) {
    mPststudposting.find({}, {}, {}, function (err, docs) {
        if (err) {
            console.log("error")
            console.log(err)
            res.status(500).send({ "save": "failed" });
        } else {
            console.log("save succ")
            console.log(docs);
            res.status(200).send({ "data": docs });
        }
    });
  });
  // 
module.exports = router;

