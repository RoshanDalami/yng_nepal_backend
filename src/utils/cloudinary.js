import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded
    // console.log("File is uploaded on Cloudinary");
    // console.log(response.url)
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(localFilePath); // remove locally saved temp file as upload failed.
    return null;
  }
};

export { uploadOnCloudinary };
