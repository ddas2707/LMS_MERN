const express = require('express');
const multer = require('multer');

const { uploadMediaToLibrary, deleteMediaFromCloudinary } = require('../../helpers/cloudinary');
const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

//route to upload media
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const result = await uploadMediaToLibrary(req.file.path);
        if (!result) {
            return res.status(500).json({ success: false, message: 'Failed to upload media to Cloudinary' });
        }
        // Optionally, you can delete the file from temporary storage after uploading

        return res.status(200).json({ success: true, message: 'Media uploaded successfully', data: result });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
})

//route to delete media
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Asset Id is required'
            })
        }
        await deleteMediaFromCloudinary(id);
        return res.status(200).json({
            success: true,
            message: 'Asset deleted successfully from the cloudinary'
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
})

module.exports = router;