import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiError.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file upload successfully
    console.log("file is uploaded on cloudinary", response);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const oldImageDeleteOnCloudinary = async (imageUrl) => {
  try {
    const parts = imageUrl.split("/");
    const publicId = parts[parts.length-1].split('.')[0]; // gets folder/filename.jpg
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Image deleted:", result);
    return result;
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error);
    throw error;
  }
};

export { uploadOnCloudinary, oldImageDeleteOnCloudinary };
