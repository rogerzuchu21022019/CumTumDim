const User = require("../model/User");

const UpdateUserInfoSv = async (userId, imageUrl, name) => {
  try {
    const query = {
      _id: userId,
    };
    const optionUpdate = {
      $set: {
        name: name,
        imageUrl: imageUrl,
      },
    };
    const user = await User.findByIdAndUpdate(query, optionUpdate, {
      new: true,
      upsert: true,
    });

    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindUserByIdSv.js:5 ~ FindUserByIdSv ~ error:",
      error
    );
  }
};
module.exports = UpdateUserInfoSv;
