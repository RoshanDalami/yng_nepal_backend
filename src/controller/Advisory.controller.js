import { Advisory } from "../Model/Advisory.model.js";

import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export async function CreateAdvisory(req, res) {
  try {
    const body = req.body;
    const file = req.files.iamge[0].path;
    if (!file)
      res.status(400).json(new ApiResponse(400, null, "File is required"));
    const fileupload = await uploadOnCloudinary(file);
    const newAdvisory = new Advisory({
      ...body,
      imageurl: fileupload.url,
    });
    const savedData = await newAdvisory.save();
    return res
      .status(200)
      .json(new ApiResponse(200, savedData, "Advisory created successfully"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function GetAdvisory(req,res){
    try {
        
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
    }
}
