const mongoose = require("mongoose");
const userSchemas = new mongoose.Schema({
    passedOutStudent: { type: String },
    name: { type: String },
    email: { type: String },
    department: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
    yearOfPassing: { type: String },
    batch: { type: String },
    designation: { type: String },
    companyName: { type: String },
    // name: { type: String },

});

userSchemas.set("timestamps", true);
module.exports = mongoose.model("pastStudRegister", userSchemas, "pastStudRegister");
