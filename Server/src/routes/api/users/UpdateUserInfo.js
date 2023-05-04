const express = require(`express`);
const UpdateUserInfoCon = require("../../../components/users/controllers/UpdateUserInfoCon");
const UpdateAddressCon = require("../../../components/users/controllers/UpdateAddressCon");

const route = express.Router();

route.post(`/:userId/update-user-info`, async (req, res) => {
  try {
    const { userId } = req.params;
    const { imageUrl, address } = req.body;
    console.log(
      "🚀 ~ file: UpdateUserInfo.js:10 ~ route.get ~ imageUrl:",
      imageUrl
    );
    console.log(
      "🚀 ~ file: UpdateUserInfo.js:10 ~ route.get ~ address:",
      address
    );
    const data = await UpdateUserInfoCon(userId, imageUrl, address.name);
    const _user = await UpdateAddressCon(userId, address);

    return res.status(200).json({
      isLoading: false,
      message: "Update User success",
      error: false,
      data: _user,
    });
  } catch (error) {
    console.log("🚀 ~ file: UpdateUserInfo.js:29 ~ route.get ~ error:", error);

    return res.status(500).json({
      isLoading: false,
      message: "Update User fail",
      error: true,
      data: {},
    });
  }
});

module.exports = route;
