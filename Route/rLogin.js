const express = require("express");

const router = express.Router();
// const mCustomer = require("../Model/mCustomer");
const mAdminLogin = require("../Model/mLogin");



router.post("/adminLogin", function (req, res) {


    let query = {
        userName: req.body.userName,
        password: req.body.password,
    }

    console.log({ query })
    mAdminLogin.find({}, (err, docs) => {
        let responseObj = {
            isUserFound: false,
            data: {}
        }
        if (err) {
            res.send({ 'message': 'user not found', 'data': responseObj });
        } else {
            docs.forEach(each => {
                if (each.userName == req.body.userName && each.password == req.body.password) {
                    responseObj.isUserFound = true;
                    responseObj.data = each;
                }
            }); 
            res.send({ 'data': responseObj })
        }
    });
    // let adminLogin = new mLogin();

    // adminLogin.userName = req.body.userName;
    // adminLogin.password = req.body.password;
    // adminLogin.save((err, docs) => {
    //     if (err) {
    //         console.log("errre save db");
    //         res.send(err);
    //     } else {
    //         console.log("success save db");
    //         res.send(docs);
    //     }
    // });
});


module.exports = router;

