const mongoose = require("mongoose");
const Collection = require("../config/Collection");
require("../config/Db")
const ImgSchema = new mongoose.Schema({
    name:
    {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
}, {
    timestamps: true
})

const ImgModel = mongoose.model(Collection.img, ImgSchema)

module.exports = ImgModel