const express = require(`express`);
const AddAddressCon = require("../../../components/users/controllers/AddAddressCon");
const router = express.Router();

router.post(`/add-address/:userId`, async (req, res) => {
  try {
    const { userId } = req.params;
    const { address } = req.body;
    console.log("🚀 ~ file: AddAddress.js:9 ~ router.post ~ address:", address);
    const user = await AddAddressCon(userId, address);
    console.log("🚀 ~ file: AddAddress.js:11 ~ router.post ~ user:", user);
    return res.status(200).json({
      isLoading: false,
      message: "Add Address success",
      error: false,
      data: user,
    });
  } catch (error) {
    console.log("🚀 ~ file: AddAddress.js:8 ~ router.post ~ error:", error);
    return res.status(500).json({
      isLoading: false,
      message: "Add Address fail",
      error: true,
      data: {},
    });
  }
});

module.exports = router;
