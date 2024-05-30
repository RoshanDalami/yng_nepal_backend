import Activity from "../Model/Activities.model.js";
import { ApiResponse } from "../utils/apiResponse";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


export async function CreateActivities(req,res){
    try {
        const body = req.body;
        const file = req.files?.image[0].path;
        const fileToCloud = await uploadOnCloudinary(file)
        const newActivity = new Activity({
            ...body,
            image:fileToCloud.url
        })
        await newActivity.save()
        return res.status(200).json(new ApiResponse(200,newActivity,"activity created successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal server error"))
    }
}

export async function GetActivity(req,res){
    try {
        const response = await Activity.find({});
        return res.status(200).json(new ApiResponse(200,response,"Activity generated successfully"))


    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Errro"))
    }
}


export async function GetActivityById(req,res){
    try {
        const {id}= req.params;
        const response = await Activity.find({_id:id});
        return res.status(200).json(new ApiResponse(200,response,"Data fetched"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}