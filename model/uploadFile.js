import mongoose from "mongoose";

const uploadFileSchema = new mongoose.Schema({
    teacher:{
        type:String,
        required:[true, 'please select teacher'],
        unique:true
    },
    student:{
        type:String,
        required:[true, 'please select student']
    },
    level:{
        type:Boolean,
        required:[true,'please select level'],
        
    },
    file:{
        type:String,
        required
    }

    })

module.exports = mongoose.models.uploadFileSchema || mongoose.model('uploadFile',uploadFileSchema);