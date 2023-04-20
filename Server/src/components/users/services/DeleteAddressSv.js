const UpdateAddressCon = require("../controllers/UpdateAddressCon");
const User = require("../model/User");

const DeleteAddressSv = async (userId, address) => {
  console.log(
    "🚀 ~ file: DeleteAddressSv.js:5 ~ DeleteAddressSv ~ address:",
    address
  );
  try {
    let user = await User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $pull: {
          addresses: {
            _id: address._id,
            addressDefault: false,
          },
        },
      },
      {
        new: true,
        upsert: true,
      }
    );
    console.log(
      "🚀 ~ file: DeleteAddressSv.js:20 ~ DeleteAddressSv ~ user:",
      user
    );

    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: DeleteAddressSv.js:47 ~ DeleteAddressSv ~ error:",
      error
    );
  }
};

module.exports = DeleteAddressSv;
