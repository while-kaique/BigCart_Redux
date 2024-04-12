const mongoose = require('mongoose')    

const Schema = mongoose.Schema

const PictureSchema = new Schema({
    name: {type:String, require:true},
    src: {type:String, required:true},
    value: {type:Number, required:true}
})

module.exports = mongoose.model("Picture", PictureSchema)