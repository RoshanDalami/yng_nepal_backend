import mongoose,{Schema} from "mongoose";

const advisorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true 
    },
    post:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

export const Advisory = mongoose.models.Advisory || mongoose.model('Advisory',advisorySchema)