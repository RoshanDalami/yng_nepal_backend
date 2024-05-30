import mongoose ,{Schema}from "mongoose";

const newCareer = Schema({
    position:{
        type:String 
    },
    location:{
        type:String 
    },
    contractPeriod:{
        type:String 
    },
    stipend:{
        type:String
    }
})

export const Career = mongoose.models.Career || mongoose.model('Career',newCareer)