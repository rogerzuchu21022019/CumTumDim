const express = require(`express`);
const UpdateAddressCon = require("../../../components/users/controllers/UpdateAddressCon");
const router = express.Router();

router.post(`/update-address/:userId`, async (req, res) => {
  try {
    const { userId } = req.params;
    const { address } = req.body;
    console.log("🚀 ~ file: UpdateAddress.js:9 ~ router.post ~ address:", address);
    const user = await UpdateAddressCon(userId, address);
    console.log("🚀 ~ file: UpdateAddress.js:11 ~ router.post ~ user:", user);
    return res.status(200).json({
      isLoading: false,
      message: "Update Address success",
      error: false,
      data: user,
    });
  } catch (error) {
    console.log("🚀 ~ file: UpdateAddress.js:19  ~ router.post ~ error:", error);
    return res.status(500).json({
      isLoading: false,
      message: "Update Address fail",
      error: true,
      data: {},
    });
  }
});

module.exports = router;
