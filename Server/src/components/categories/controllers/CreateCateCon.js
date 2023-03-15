const CreateCateSv = require("../services/CreateCate");

const CreateCateCon = async (name, type) => {
  try {
    const newCate = await CreateCateSv(name, type);
    return newCate;
    
  } catch (error) {}
};

module.exports = CreateCateCon;
