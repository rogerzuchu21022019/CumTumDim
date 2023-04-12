const User = require("../model/User");

const UpdateUserByIdSv = async (userId, order, notification) => {
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
        notifications: {
          $each: [notification],
          $position: 0,
        },
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
module.exports = UpdateUserByIdSv;
