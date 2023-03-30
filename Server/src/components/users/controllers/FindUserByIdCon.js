const FindUserByIdSv = require("../services/FindUserByIdSv")

const FindUserByIdCon = async (userId) => {
    try {
        const user = await FindUserByIdSv(userId)
        return user
    } catch (error) {
        console.log("🚀 ~ file: FindUserByIdCon.js:5 ~ FindUserByIdCon ~ error:", error)
        
    }
 }
 module.exports = FindUserByIdCon