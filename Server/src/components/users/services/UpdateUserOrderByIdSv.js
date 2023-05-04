const User = require("../model/User");

const UpdateUserOrderByIdSv = async (userId, order, ) => {
  try {




    const query = {
      _id: userId,
    };
    const optionUpdate = {
      $push: {
        orders: {
          $each: [order],
          $position: 0,
        },
      },
    };
    const user = await User.findByIdAndUpdate(query, optionUpdate, {
      new: true,
      upsert: true,
    });
    console.log("🚀 ~ file: UpdateUserOrderByIdSv.js:24 ~ UpdateUserOrderByIdSv ~ user:", user)

    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: FindUserByIdSv.js:5 ~ FindUserByIdSv ~ error:",
      error
    );
  }
};
module.exports = UpdateUserOrderByIdSv;
