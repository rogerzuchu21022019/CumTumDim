const express = require(`express`);
const UpdateUserInfoCon = require("../../../components/users/controllers/UpdateUserInfoCon");

const route = express.Router();

route.get(`/:userId/update-user-info`, async (req, res) => {
  try {
    const { userId } = req.params;
    const { imageUrl, address } = req.body;
    console.log("🚀 ~ file: UpdateUserInfo.js:10 ~ route.get ~ imageUrl:", imageUrl)
    console.log("🚀 ~ file: UpdateUserInfo.js:10 ~ route.get ~ address:", address)
    const data = await UpdateUserInfoCon(userId, imageUrl);

    return res.status(200).json({
      isLoading: false,
      message: "Get User success",
      error: false,
      data: data,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: CraeateOrderCon.js:8 ~ CreateOrderCon ~ error:",
      error.message
    );
    return res.status(500).json({
      isLoading: false,
      message: "Get User fail",
      error: true,
      data: {},
    });
  }
});

module.exports = route;
