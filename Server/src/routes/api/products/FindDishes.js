const express = require(`express`);
const FindDishesCon = require("../../../components/products/controllers/FindDishesCon");
const router = express.Router();

router.get(`/dishes`,async (req,res) => { 
    try {
        const dishes = await FindDishesCon();
        res.json(dishes);
    } catch (error) {
        console.log("🚀 ~ file: FindDishes.js:12 ~ router.post ~ error:", error)
    }
    
 })

module.exports = router;