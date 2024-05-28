import { Banner } from "../Model/Banner.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export async function GetAllBanner(req, res) {
  try {
    const response = await Banner.find({});
    return res
      .status(200)
      .json(new ApiResponse(200, response, "data generated "));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}
export async function GetActiveBanner(req, res) {
  try {
    const response = await Banner.findOne({ isActive: true });
    return res
      .status(200)
      .json(new ApiResponse(200, response, "Data generated"));
  } catch (error) {
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}

export async function CreateBanner(req, res) {
  try {
    const file = req.files?.image[0].path;
    if (!file) {
      return;
    }
   await Banner.updateMany({ isActive: false });
    const image = await uploadOnCloudinary(file);
    const newBanner = new Banner({
      imageurl: image.url,
      isActive: true,
    });
    const savedBanner = await newBanner.save();
    return res
      .status(200)
      .json(new ApiResponse(200, savedBanner, "Banner created successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
}


export async function DeleteBanner (req,res){
  try {
    const {id} = req.params;
    const response = await Banner.findOneAndDelete({_id:id})
    return res.status(200).json(new ApiResponse(200,response,'Deleted'))
  } catch (error) {
    return res.status(500).json(new ApiResponse(500,null,'Internal Server Error'))
  }
}