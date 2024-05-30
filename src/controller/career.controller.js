import { Career } from "../Model/career.model.js";
import { ApiResponse } from "../utils/apiResponse.js";

export async function CreateCareer(req,res){
    try {
        const body = req.body;
        const newCareer = new Career(body);
    await newCareer.save()
    return res.status(200).json(new ApiResponse(200,newCareer,'created career'))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}

export async function GetCareer(req,res){
    try {
        const response = await Career.find({});
        return res.status(200).json(new ApiResponse(200,response,"Career generated successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}

export async function GetCareerById(req,res){
    try {
        const {id} = req.params;
        const response = await Career.findOne({_id:id})
        return res.status(200).json(new ApiResponse(200,response,"Generated successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server error"))
    }
}