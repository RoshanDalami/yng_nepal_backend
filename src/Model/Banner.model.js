import mongoose,{Schema} from "mongoose";

const BannerSchema = new Schema({
    imageurl:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    },
    date:{
        type:String
    },
    title:{
        type:String
    }
});

const Banner = mongoose.models.Banner || mongoose.model('Banner',BannerSchema)
export {Banner}