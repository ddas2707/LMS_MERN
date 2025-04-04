const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadMediaToLibrary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'auto',
            folder: 'your_folder_name', // Specify your folder name here
        });
        return result;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to upload media to Cloudinary');
    }
}

const deleteMediaFromCloudinary = async (publicId) => {
    try {
        await cloudinary.uploader.destroy(publicId, {
            resource_type: 'auto',
        });
    } catch (error) {
        console.log(error);
        throw new Error('Failed to delete media from Cloudinary');
    }
}

module.exports = { uploadMediaToLibrary, deleteMediaFromCloudinary };