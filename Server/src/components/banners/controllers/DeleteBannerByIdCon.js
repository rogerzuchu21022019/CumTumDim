const DeleteBannerByIdSv = require("../services/DeleteBannerById");

const DeleteBannerByIdCon = async (bannerId) => {
  try {
    const banner = await DeleteBannerByIdSv(bannerId);
    return banner;
  } catch (error) {
  console.log("🚀 ~ file: DeleteBannerByIdCon.js:8 ~ DeleteBannerByIdCon ~ error:", error)
  }
};

module.exports = DeleteBannerByIdCon;
