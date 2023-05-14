const mongoose = require("mongoose");
const userSchemas = new mongoose.Schema({
    name: { type: String },
    
    title: { type: String },

    description: { type: String },
});

userSchemas.set("timestamps", true);
module.exports = mongoose.model("pststudposting", userSchemas, "pststudposting");
