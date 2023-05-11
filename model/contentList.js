import mongoose from "mongoose";

const uploadFileSchema = new mongoose.Schema({
    teacher:{
        type:String,
    
        
    },
    student:{
        type:String,
        
    },
    level:{
        type:String,
    },
    file:
    {
        type:String,    
    },

    fileType:{
            type:String
    },
    date:{
        type:String
    }

    })

module.exports = mongoose.models['uploadFile'] || mongoose.model('uploadFile',uploadFileSchema);