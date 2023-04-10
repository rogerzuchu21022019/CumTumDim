var paypal = require("paypal-rest-sdk");
require(`dotenv`).config();
paypal.configure({
  mode: "sandbox", //sandbox or liv
  client_id: process.env.CLIENT_ID_PAYPAL,
  client_secret: process.env.SECRET_PAYPAL,
});

const express = require(`express`)
const router = express.Router()

router.post(`/payment-paypal/`,async (req,res) => { 
    try {

        const {item} = req.body
        
        
    } catch (error) {
        console.log("🚀 ~ file: PaymentPaypal.js:16 ~ router.post ~ error:", error)
    }
 })

module.exports = router
