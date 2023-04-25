const express = require(`express`);
const UpdateUserOrderByIdCon = require("../../../components/users/controllers/UpdateUserOrderByIdCon");

const route = express.Router();

route.get(`/:userId/update-user-order-by-id`, async (req, res) => {
// route.get(`/:userId/user-info`, async (req, res) => {
  try {
    const { userId } = req.params;
    const { order } = req.body;
    console.log("🚀 ~ file: FindUserById.js:8 ~ route.get ~ userId:", userId);
    const data = await UpdateUserOrderByIdCon(userId, order);

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
