const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const rStudFnlYr = require("./Route/rStudFnlYr");
const radmin = require("./Route/rAdmin");
const rpststudposting= require("./Route/rPststudposting");
const rpastStudRegister= require("./Route/rPastStudRegister");
const radminLogin= require("./Route/rLogin");


app.use(cors());
app.use(bodyParser.json());
app.use("/user", rStudFnlYr);
app.use("/user", radmin);
app.use("/user", rpststudposting);
app.use("/user", rpastStudRegister);
app.use("/user", radminLogin);

// app.use("/user", rpststudposting);





const database = "mongodb://localhost:27017/prj"
  
// connecting mode
mongoose.connect(
  database,
  { useNewUrlParser: true, useUnifiedTopology: true, },
  (err, succ) => {
    if (err) {
      console.log(err)
      console.log("Db not cconnected");
    } else {
      console.log("DB connected");
    }
  }
);

// server on mode
app.listen(3000, () => {
  console.log("connecting");
  
});
