const mongoose = require("mongoose");
const userSchem = new mongoose.Schema({
  studentName: { type: String },
  email  : { type: String },
  departmentName   : { type: String },
  selectSection: { type: String },
  password: { type: String },
  confirmationPassword : { type: String },
});

userSchem.set("timestamps", true);
module.exports = mongoose.model("studFnlYr", userSchem, "studFnlYr");
