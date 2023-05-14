const mongoose = require("mongoose");
const userSchemas = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  department: { type: String },
  assword: { type: String },
  confirmPassword: {type:String},
  currentStudent: { type: String },

});

userSchemas.set("timestamps", true);
module.exports = mongoose.model("currentStudentRegister", userSchemas, "currentStudentRegister");
