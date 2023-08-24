const UpdateBannerByIdSv = require("../services/UpdateBannerByIDSv");

const UpdateBannerByIDCon = async (bannerId, imageUrl) => {
  try {
    const banner = await UpdateBannerByIdSv(bannerId, imageUrl);
    return banner;E
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateBannerByIDCon.js:8 ~ UpdateBannerByIDCon ~ error:",
      error
    );
  }
};

module.exports = UpdateBannerByIDCon;
