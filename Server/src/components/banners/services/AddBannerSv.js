const Banner = require("../model/Banner");

const AddBannerSv = async (imageUrl) => {
  const banner = await Banner.create({
    imageUrl,
  });

  return banner;
};

module.exports = AddBannerSv;
