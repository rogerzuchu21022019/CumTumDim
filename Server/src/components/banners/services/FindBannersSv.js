const Banner = require("../model/Banner");

const FindBannersSv = async () => {
  try {
    const banners = await Banner.find({});
    return banners;
  } catch (error) {}
};
module.exports = FindBannersSv;
