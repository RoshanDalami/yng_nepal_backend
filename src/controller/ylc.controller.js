import Ylc from "../Model/Ylc.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export async function CreateYlc(req,res){
    try {
        const body = req.body;
        const file = req.files.image[0]?.path;

        const fileupload = await uploadOnCloudinary(file);

        const newYlc = new Ylc({
            ...body,
            photo:fileupload.url
        })
        await newYlc.save();

    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}

export async function GetYlc(req,res){
    try {
        const resposne = await Ylc.find({});
        return res.status(200).json(new ApiResponse(200,resposne,"data fetched"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}

export async function GetYlcbyId(req,res){
    try {
        const {id} = req.params;
        const response = await Ylc.findOne({_id:id});
        return res.status(200).json(new ApiResponse(200,response,"data fetched"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server"))
    }
}