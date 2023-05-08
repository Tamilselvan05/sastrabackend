const express = require("express");

const router = express.Router();
const mShop = require("../Model/mShop");
// const tamil = require("../models/mModels");


router.post("/insert", function (req, res) {
  console.log(req.body);
  let user = new mShop();

  user.shopName = req.body.shopName;
  user.ownerName = req.body.ownerName;
  user.phone = req.body.phone;
  user.save((err, docs) => {
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
