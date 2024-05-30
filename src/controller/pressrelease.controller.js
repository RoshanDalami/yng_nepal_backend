import Press from "../Model/PressRelease.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

export async function CreatePressRelease(req,res){
    try {
        const body = req.body;
        const pdfFile = req.files.file[0]?.path;

        const newPress = new Press({
            ...body,
            pdfFile:pdfFile
        });
        await newPress.save()
        return res.status(200).json(new ApiResponse(200,newPress,"Press created successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}
export async function GetPressRelease(req,res){
    try {
        const response = await Press.find({})
        return res.status(200).json(new ApiResponse(200,response,"Data fetched successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}

export async function GetPressIndividual(req,res){
    try {
        const {id} = req.params;
        const response = await Press.findOne({_id:id})
        return res.status(200).json(new ApiResponse(200,response,"Data fetched successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}