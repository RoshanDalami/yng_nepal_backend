import mongoose, {Schema} from "mongoose";


const NewsSchema = new Schema({
    date:{
        type:String,
        required:true
    },
    engDate:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
});

const News = mongoose.models.News || mongoose.model('News',NewsSchema)

export {News}