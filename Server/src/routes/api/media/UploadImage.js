const express = require(`express`);
const Cloudirary = require("../../../utils/Cloudirary");

const router = express.Router();

router.post(`/upload-image`, async (req, res) => {
  try {
    const file = req.file;
    console.log("🚀 ~ file: UploadImage.js:8 ~ router.post ~ file:", file);

    const result = await Cloudirary.uploader.upload(file.path, {
      secure: true,
      folder: "cumtum",
      allowed_formats: ["jpg", "png", "jpeg"],
      transformation: [{ width: 500, height: 500, crop: "limit" }],
    });

    res.status(200).json({
      status: `Success`,
      message: `Upload Image success`,
      isLoading: false,
      isLoggedIn: true,
      error: false,
      imageUrl: result.url,
    });
  } catch (error) {
    console.log("🚀 ~ file: UploadImage.js:15 ~ router.post ~ error:", error);
    res.status(500).json({
      status: `Error`,
      message: `Upload Image error`,
      isLoading: false,
      isLoggedIn: true,
      error: true,
      imageUrl: null,
    });
  }
});
module.exports = router;
