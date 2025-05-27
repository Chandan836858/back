const express = require("express")
const upload = require("../middleware/uploadmiddleware")
const ImgController = require("../controller/ImgController")
const ImgRouter =express.Router()

ImgRouter.post("/imgs",upload.single("image"),ImgController.addImg)
ImgRouter.get("/getImages",ImgController.getImage)
ImgRouter.delete("/delimage/:emp_id",ImgController.delimg)


module.exports = ImgRouter