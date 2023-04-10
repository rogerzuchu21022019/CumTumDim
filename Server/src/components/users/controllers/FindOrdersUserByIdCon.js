const FindOrdersUserByIdSv = require("../services/FindOrdersUserById");


const FindOrdersUserByIDCon = async (userId) => {
  try {
    const orders = await FindOrdersUserByIdSv(userId);
    return orders;
  } catch (error) {
    console.log("🚀 ~ file: FindUserByIdCon.js:10 ~ FindUserByIDCon ~ error:", error)
    
  }
};
module.exports = FindOrdersUserByIDCon;
