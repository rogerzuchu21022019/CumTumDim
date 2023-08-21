const Banner = require("../model/Banner");

const DeleteBannerByIdSv = async (bannerId) => {
  try {
    const query = {
      _id: bannerId,
    };
    const banner = await Banner.findByIdAndDelete(query);
    return banner;
  } catch (error) {
    console.log(
      "🚀 ~ file: DeleteBannerById.js:12 ~ DeleteBannerByIdSv ~ error:",
      error
    );
  }
};

module.exports = DeleteBannerByIdSv;
