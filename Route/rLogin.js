const express = require("express");

const router = express.Router();
// const mCustomer = require("../Model/mCustomer");
const mAdminLogin = require("../Model/mLogin");
const mpastStudRegister = require("../Model/mpastStudRegister");
const mCurrentStudRegister = require("../Model/mCurrentStudRegister");



router.post("/adminLogin", async function (req, res) {


    let query = {
        userName: req.body.userName,
        password: req.body.password,
    }

    let passedStudQuery = {
        name: req.body.userName,
        confirmPassword: req.body.password,
    }

    let currentStudQuery = {
        name: req.body.userName,
        confirmPassword: req.body.password,
    }

    console.log("stdudent query");
    console.log({ passedStudQuery, currentStudQuery });

    let currentStuDocs = null;
    let passStudDocs = await mpastStudRegister.findOne(passedStudQuery);
    let currentStuAllDocs = await mCurrentStudRegister.find({});
    console.log({ query })
    console.log("student datailsssss");
    console.log({ passStudDocs, currentStuDocs });



    mAdminLogin.find({}, (err, docs) => {
        console.log("docs");
        console.log(docs);
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



            if (currentStuAllDocs.length) {
                currentStuAllDocs.forEach(eachCurentStu => {
                    if (req.body.userName == eachCurentStu.name
                        && req.body.password == eachCurentStu.confirmPassword) {
                        currentStuDocs = eachCurentStu;
                    }
                })
            }




            res.send({ 'data': responseObj, passStudDocs, currentStuDocs })
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

