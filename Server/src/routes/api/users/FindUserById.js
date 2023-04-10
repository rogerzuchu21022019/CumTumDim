const express = require(`express`);
const FindUserByIDCon = require("../../../components/users/controllers/FindUserByIdCon");

const route = express.Router();

route.get(`/:userId/find-user-by-id`, async (req, res) => {
  try {
    const userId = req.params.userId;
    
    console.log("🚀 ~ file: FindUserById.js:8 ~ route.get ~ userId:", userId);
    const data = await FindUserByIDCon(userId);

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
