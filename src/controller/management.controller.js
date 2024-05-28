import { ApiResponse } from "../utils/apiResponse.js";
import { Management } from "../Model/Management.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export async function CreateManagement(req,res){
    try {
        const body = req.body;
        const file = req.files.image[0].path;
        if(!file){
            return res.status(400).json(new ApiResponse(400,null,"File is required"))
        }
        const fileupload = await uploadOnCloudinary(file);
        const newManagement = new Management({
            ...body,
            imageurl:fileupload.url
        });
        const savedManagement = await newManagement.save();
        return res.status(200).json(new ApiResponse(200,savedManagement,"management created successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,'Internal Server Error'))
    }
}
export async function GetManagement(req,res){
    try {
            const response = await Management.find({});
            return res.status(200).json(new ApiResponse(200,response,"Management generated successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}

export async function GetManagementById(req,res){
    try {
        const {id}= req.params;
            const response = await Management.findOne({_id:id});
            return res.status(200).json(new ApiResponse(200,response,"Management generated by id"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}