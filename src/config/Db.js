const mongoose = require("mongoose")
require('dotenv').config();
mongoose.connect(process.env.DB_URL).then((req,res)=>{
    console.log("Date base is connected successful");
}).catch((err)=>{
    console.log(err)
    console.log("Date base is not connected");
})