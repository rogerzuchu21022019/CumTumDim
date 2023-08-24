const express = require(`express`);
const DeleteBannerByIdCon = require("../../../components/banners/controllers/DeleteBannerByIdCon");
const router = express.Router();

router.post(`/delete-banner/:bannerId`, async (req, res) => {
  try {
    const { bannerId } = req.params;
    await DeleteBannerByIdCon(bannerId);
    res.status(200).json({
      isLoading: false,
      message: "Delete Category success",
      error: false,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: DeleteCategory.js:15 ~ router.post ~ error:",
      error
    );
    res.status(500).json({
      isLoading: false,
      message: "Delete Category fail",
      error: true,
    });
  }
});

module.exports = router;
