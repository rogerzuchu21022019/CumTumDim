const express = require(`express`);
const UpdateCategoryByIDCon = require("../../../components/categories/controllers/UpdateCategoryByIDCon");
const UpdateBannerByIDCon = require("../../../components/banners/controllers/UpdateBannerByIDCon");
const Cloudirary = require("../../../utils/Cloudirary");
const router = express.Router();

router.post(`/update-banner-by-id/:bannerId`, async (req, res) => {
  try {
    const file = req.file;
    console.log("🚀 ~ file: AddBanner.js:11 ~ router.post ~ file:", file);

    const result = await Cloudirary.uploader.upload(file.path, {
      secure: true,
      folder: "cumtum",
      allowed_formats: ["jpg", "png", "jpeg"],
      // transformation: [{ width: 500, height: 500, crop: "limit" }],
    });
    const imageUrl = result.secure_url;
    const { bannerId } = req.params;
    const banner = await UpdateBannerByIDCon(bannerId, imageUrl);
    res.status(200).json({
      isLoading: false,
      message: "Update Banner Success",
      error: false,
      data: banner,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateBannerByID.js:18 ~ router.post ~ error:",
      error
    );

    res.status(500).json({
      isLoading: false,
      message: "Update Banner fail",
      error: true,
      data: {},
    });
  }
});

module.exports = router;
