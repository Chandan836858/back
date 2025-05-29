
const express = require("express")
const cors=require("cors")
const path = require('path');
const ImgRouter = require("./src/routes/Imgrouter")

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use("/all_img", express.static(__dirname + "/public/upload/")); 
app.use("/images", ImgRouter)

module.exports = app