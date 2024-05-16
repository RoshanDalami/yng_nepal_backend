import { News } from "../Model/News.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export const GetNews = async (req, res) => {
  try {
    const response = await News.find({});
    return res
      .status(200)
      .json(new ApiResponse(200, response, "Data fetched successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new ApiResponse(500, null, "Internal Server Error"));
  }
};

export const CreateNews = async(req,res)=>{
  try {
    const body = req.body;
    const file = req.files?.image[0].path;
    if(!file){
      return ;
    }
    const image = await uploadOnCloudinary(file);
    const newNews = new News({
      ...body,
      imageUrl:image.url
    })
    const savedNews = await newNews.save();

    return res.status(200).json(new ApiResponse(200,savedNews,'News Created Successfully'))
    
  } catch (error) {
    return res.status(500).json(new ApiResponse(500,null,"Internal Server Error"))
  }
}
