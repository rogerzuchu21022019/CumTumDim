const express = require(`express`);
const CreateCateCon = require("../../../components/categories/controllers/CreateCateCon");
const router = express.Router();

router.post(`/create-cate`, async (req, res) => {
  try {
    const { name, type } = req.body;
    const newCate = await CreateCateCon(name, type);
    // console.log("🚀 ~ file: CreateCate.js:9 ~ router.post ~ newCate:", newCate);
    res.status(200).json({
      isLoading: false,
      message: "Create Cate success",
      error: false,
      data: newCate,
    });
  } catch (error) {
    console.log("🚀 ~ file: CreateCate.js:16 ~ router.post ~ error:", error);
    res.status(500).json({
      isLoading: false,
      message: "Create Cate fail",
      error: true,
      data: {},
    });
  }
});

module.exports = router;
