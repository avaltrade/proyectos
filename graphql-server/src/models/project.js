const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')


const ProjectSchema = new  Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    topic: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Project", ProjectSchema)