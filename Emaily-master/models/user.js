const mongoose = require("mongoose")

//const Schema = mongoose.Schema
const { Schema } = mongoose
const userSchema = new Schema({
    Id: String,
})



mongoose.model('users',userSchema)