const express = require(`express`);
const FindCategoriesCon = require("../../../components/categories/controllers/FindCategoriesCon");
const router = express.Router();

router.get(`/categories`,async (req,res) => { 
    try {
        
        const categories = await FindCategoriesCon();
        console.log("🚀 ~ file: FindCategories.js:9 ~ router.get ~ categories:", categories)
        res.json(categories);
    } catch (error) {
        console.log("🚀 ~ file: FindCategories.js:12 ~ router.get ~ error:", error)
        
        
    }
 })
module.exports = router;