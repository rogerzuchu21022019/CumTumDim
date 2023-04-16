const FindUserByIdSv = require("../services/FindUserByIDSv");


const FindUserByIDCon = async (userId) => {
  try {
    const user = await FindUserByIdSv(userId);
    return user;
  } catch (error) {
    console.log("🚀 ~ file: FindUserByIdCon.js:10 ~ FindUserByIDCon ~ error:", error)
    
  }
};
module.exports = FindUserByIDCon;
