import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import fs from "fs"
config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

export const uploadCloudinary = async (localPathFile) => {
    try {
        if(!localPathFile) return null;

        const response = await cloudinary.uploader.upload(localPathFile, {
            resource_type: "auto"
        })
        console.log("Successfully Uploaded", response.url);
        fs.unlinkSync(localPathFile)
        return response;

    } catch (error) {
        console.log("error", error)
        fs.unlinkSync(localPathFile) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}


