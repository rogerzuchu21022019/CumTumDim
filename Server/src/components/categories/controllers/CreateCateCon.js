const CreateCateSv = require("../services/CreateCateSv");

const CreateCateCon = async (name, type) => {
  try {
    const newCate = await CreateCateSv(name, type);
    return newCate;
    
  } catch (error) {}
};

module.exports = CreateCateCon;
