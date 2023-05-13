import mongoose from "mongoose";

const uploadFileSchema = new mongoose.Schema({
   
    source: {
        file: { type: Buffer, required: true },
        filename: { type: String, required: true },
        mimetype: { type: String, required: true }
      },
    fileType:{
        type:String
    },
    student:{
        type:String,
        
    },
    teacher:{
        type:String,
    },

    level:{
        type:String,
    },

    date:{
        type:String
    }

    })

module.exports = mongoose.models['uploadFile'] || mongoose.model('uploadFile',uploadFileSchema);