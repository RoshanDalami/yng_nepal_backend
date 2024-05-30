import Media from "../Model/Media.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export async function CreateMedia(req,res){
    try {
        const body = req.body;
        const file = req.files.image[0].path ;
       const fileupload = await uploadOnCloudinary(file);
       const newMedia = new Media({...body,image:fileupload.url})
       await newMedia.save();
       return res.status(200).json(new ApiResponse(200,newMedia,"media created successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}

export async function GetMedia(req,res){
    try {
        const response = await Media.find({});
        return res.status(200).json(new ApiResponse(200,response,"media generated"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}


export async function GetMediaById(req,res){
    try {
        const {id} = req.params;
            const response = await Media.findOne({_id:id})
            return res.status(200).json(new ApiResponse(200,response,"service"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}