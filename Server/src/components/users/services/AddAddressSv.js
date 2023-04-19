const User = require("../model/User");

const AddAddressSv = async (userId, address) => {
  try {
    let user = await User.findByIdAndUpdate(
      {
        _id: userId,
      },
      {
        $push: {
          addresses: {
            $each: [address],
            $position: 0,
          },
        },
      },
      {
        new: true,
        // upsert: true,
      }
    );
    if (user.addresses.length === 1) {
      let newAddress = {
        ...address,
        addressDefault: true,
      };
      const _user = await User.findByIdAndUpdate(
        {
          _id: userId,
          "addresses._id": address._id,
        },
        {
          $set: {
            addresses: [newAddress],
          },
        },
        {
          new: true,
          upsert: true,
        }
      );
      return _user;
    }
    return user;
  } catch (error) {
    console.log("🚀 ~ file: AddAddressSv.js:5 ~ AddAddressSv ~ error:", error);
  }
};

module.exports = AddAddressSv;
