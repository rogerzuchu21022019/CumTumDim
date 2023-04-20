const UpdateAddressCon = require("../controllers/UpdateAddressCon");
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
        upsert: true,
      }
    );

    let addresses = user.addresses;
    // console.log(
    //   "🚀 ~ file: AddAddressSv.js:25 ~ AddAddressSv ~ addresses:",
    //   addresses
    // );
    if (addresses.length === 1) {
      user.addresses[0].addressDefault = true;
      user = await user.save();
    } else {
      if (addresses[0].addressDefault === true) {
        const addressDefaultTrue = addresses.filter(
          (address) => address.addressDefault === true
        );
        addressDefaultTrue.forEach(
          (item) => (item.addressDefault = false)
        );
        addresses[0].addressDefault = true;
        user = await user.save();
      }
    }

    return user;
  } catch (error) {
    console.log("🚀 ~ file: AddAddressSv.js:5 ~ AddAddressSv ~ error:", error);
  }
};

module.exports = AddAddressSv;
