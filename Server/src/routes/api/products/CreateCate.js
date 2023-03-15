const express = require(`express`);
const CreateCateCon = require("../../../components/categories/controllers/CreateCateCon");
const router = express.Router();

router.post(`/create-cate`, async (req, res) => {
  try {
    const { name, type } = req.body;
    const newCate = await CreateCateCon(name, type);
    console.log("🚀 ~ file: CreateCate.js:9 ~ router.post ~ newCate:", newCate)
    res.json(newCate);
  } catch (error) {}
});

module.exports = router;
