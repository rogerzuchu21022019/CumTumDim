const Banner = require("../model/Banner");



const UpdateBannerByIdSv = async (bannerId,imageUrl) => {
  try {
    const query = {
      _id: bannerId,
    };
    const updateValue = {
      imageUrl: imageUrl,
    };
    const updateOptions = {
      new: true,
      upsert: true,
    };
    const banner = await Banner.findByIdAndUpdate(
      query,
      updateValue,
      updateOptions
    );
    return banner;
  } catch (error) {
  console.log("🚀 ~ file: UpdateBannerByIDSv.js:24 ~ UpdateCategoryByIdSv ~ error:", error)
  }
};

module.exports = UpdateBannerByIdSv;
