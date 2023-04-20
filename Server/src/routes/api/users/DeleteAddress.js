const express = require(`express`);
const DeleteAddressCon = require("../../../components/users/controllers/DeleteAddressCon");
const router = express.Router();

router.post(`/delete-address/:userId`, async (req, res) => {
  try {
    const { userId } = req.params;
    const { address } = req.body;
    console.log("🚀 ~ file: DeleteAddress.js:9 ~ router.post ~ address:", address)
    const user = await DeleteAddressCon(userId, address);
    return res.status(200).json({
      isLoading: false,
      message: "Delete Address success",
      error: false,
      data: user,
    });
  } catch (error) {
    console.log("🚀 ~ file: DeleteAddress.js:8 ~ router.post ~ error:", error);
    return res.status(500).json({
      isLoading: false,
      message: "Delete Address fail",
      error: true,
      data: {},
    });
  }
});

module.exports = router;
