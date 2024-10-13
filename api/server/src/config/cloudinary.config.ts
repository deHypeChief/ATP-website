import {v2 as cloudinaryClient} from "cloudinary"


const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // replace with your Cloudinary cloud name
  api_key: process.env.CLOUDINARY_CLOUD_NAME,       // replace with your Cloudinary API key
  api_secret: process.env.CLOUDINARY_API_SECRET,  // replace with your Cloudinary API secret
};



cloudinaryClient.config(cloudinaryConfig);

export default cloudinaryClient