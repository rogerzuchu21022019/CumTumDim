const User = require("../model/User");

const UpdateUserOrderExistedSv = async (userId, order) => {
  try {
    const query = {
      _id: userId,
      "orders._id": order._id,
    };
    const optionUpdate = {
      $set: {
        "orders.$": order,
      },
    };
    const user = await User.findOneAndUpdate(query, optionUpdate, {
      new: true,
      upsert: false,
    });


    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateUserOrderExistedSv.js:21 ~ UpdateUserOrderExistedSv ~ error:",
      error
    );
  }
};
module.exports = UpdateUserOrderExistedSv;
