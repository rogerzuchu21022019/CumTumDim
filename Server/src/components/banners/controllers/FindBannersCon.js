const FindBannersSv = require("../services/FindBannersSv");

const FindBannersCon = async () => {
  try {
    const banners = await FindBannersSv()
    return banners;
  } catch (error) {}
};
module.exports = FindBannersCon;
