const express = require(`express`);
const Cloudirary = require("../../../utils/Cloudirary");
const fs = require("fs");
const path = require("path");
const AddBannerCon = require("../../../components/banners/controllers/AddBannerCon");
const router = express.Router();

router.post(`/add-banner`, async (req, res) => {
  try {
    const file = req.file;
    console.log("🚀 ~ file: AddBanner.js:11 ~ router.post ~ file:", file)

    const result = await Cloudirary.uploader.upload(file.path, {
      secure: true,
      folder: "cumtum",
      allowed_formats: ["jpg", "png", "jpeg"],
      // transformation: [{ width: 500, height: 500, crop: "limit" }],
    });
    const imageUrl = result.secure_url;

    await AddBannerCon(imageUrl);

    res.status(200).json({
      status: `Success`,
      message: `Add Banner Success`,
      isLoading: false,
      isLoggedIn: true,
      error: false,
      imageUrl: result.secure_url,
    });
  } catch (error) {
    console.log("🚀 ~ file: AddBanner.js:31 ~ router.post ~ error:", error);

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
