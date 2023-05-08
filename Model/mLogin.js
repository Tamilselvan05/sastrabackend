const mongoose = require("mongoose");
const userSchemas = new mongoose.Schema({
   
    userName: { type: String },
   password: { type: String },
    // name: { type: String },

});

userSchemas.set("timestamps", true);
module.exports = mongoose.model("adminLogin", userSchemas, "adminLogin");
