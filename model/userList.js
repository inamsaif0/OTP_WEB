import mongoose from "mongoose"
import { StringDecoder } from "string_decoder"

const userListSchema = new mongoose.Schema({
    no:{
        type:Number,
    },
    studentName:{
        type:String

    },
    studentId:{
        type:String

    },
    level:{
        type:String
    },
    status:{
        type:Boolean
    },


})

module.exports = mongoose.model.userList || mongoose.model('userList',userListSchema);