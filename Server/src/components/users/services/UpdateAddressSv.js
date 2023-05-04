const User = require("../model/User");

const UpdateAddressSv = async (userId, address) => {
  console.log(
    "🚀 ~ file: UpdateAddressSv.js:4 ~ UpdateAddressSv ~ address:",
    address
  );
  try {
    if (address.addressDefault === true) {
      const _userP = await User.findOneAndUpdate(
        {
          _id: userId,
        },
        {
          $set: {
            "addresses.$[].addressDefault": false,
          },
        },
        {
          new: true,
          upsert: true,
        }
      );

      const _user = await User.findOneAndUpdate(
        {
          _id: userId,
          "addresses._id": address._id,
        },
        {
          $set: {
            "addresses.$": address,
          },
        },
        {
          new: true,
          upsert: true,
        }
      );
      return _user;
    } else {
      const _user = await User.findOneAndUpdate(
        {
          _id: userId,
          "addresses._id": address._id,
        },
        {
          $set: {
            "addresses.$": address,
          },
        },
        {
          new: true,
          upsert: true,
        }
      );
      return _user;
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: UpdateAddressSv.js:23 ~ UpdateAddressSv ~ error:",
      error
    );
  }
};

module.exports = UpdateAddressSv;
