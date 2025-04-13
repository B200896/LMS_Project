import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'
dotenv.config()
cloudinary.config({
    api_key:process.env.API_KEY_CLOUDINARY,
    api_secret:process.env.API_SECRET_CLOUDINARY,
    cloud_name:process.env.API_CLOUD_NAME,
})
export const uploadMedia=async (file)=>{
    try{
        const uploadResponse=await cloudinary.uploader.upload(file,{
            resource_type:"auto"
        })
        return uploadResponse

    }catch(error)
    {
        console.log("error",error)

    }
}
export const deleteMedia=async(publicId)=>{
    try{
        await cloudinary.uploader.destroy(publicId)

    }
    catch(error)
    {
        console.log("error",error)
    }


}
export const deleteVideoFromCloudinary=async (publicId)=>{
    try{
        await cloudinary.uploader.destroy(publicId,{resource_type:"video"})

    }
    catch(error)
    {
        console.log("error",error)
    }
}
