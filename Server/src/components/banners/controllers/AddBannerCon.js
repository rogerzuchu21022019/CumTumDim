const AddBannerSv = require("../services/AddBannerSv");

const AddBannerCon = async (imageUrl) => {
  const banner = await AddBannerSv(imageUrl);

  return banner;
};

module.exports = AddBannerCon;
