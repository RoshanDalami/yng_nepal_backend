import mongoose,{Schema} from "mongoose";

const managementSchema = new Schema({
    name:{
        type:String 
    },
    imageurl:{
        type:String,
    },
    post:{
        type:String
    }

})

export const Management = mongoose.models.Management || mongoose.model('Management',managementSchema)