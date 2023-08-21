const express = require(`express`);
const FindBannersCon = require("../../../components/banners/controllers/FindBannersCon");
const router = express.Router();

router.get(`/banners`, async (req, res) => {
  try {
    const banners = await FindBannersCon();
    res.json({
      message: "success",
      status: "200",
      error: false,
      loading: false,
      data: banners,
    });
  } catch (error) {
  console.log("🚀 ~ file: FindBanners.js:17 ~ router.get ~ error:", error)
  }
});
module.exports = router;
