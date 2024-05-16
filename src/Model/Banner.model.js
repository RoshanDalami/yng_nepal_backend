import mongoose,{Schema} from "mongoose";

const BannerSchema = new Schema({
    imageurl:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
});

const Banner = mongoose.models.Banner || mongoose.model('Banner',BannerSchema)
export {Banner}