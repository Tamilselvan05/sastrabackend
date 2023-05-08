const mongoose = require("mongoose");
const userSchemas = new mongoose.Schema({
  currentUserName: { type: String },
  newUserName: { type: String },
  confirmUserName: { type: String },
  newPassword: { type: String },
  confirmPassword: {type:String},
  currentPassword: { type: String },

});

userSchemas.set("timestamps", true);
module.exports = mongoose.model("admin", userSchemas, "admin");
