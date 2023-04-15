const Category = require("../model/Category");

const CreateCateSv = async (name, type) => {
  try {
    const newCate = new Category({
      name: name,
      type: type,
    });
    
    await newCate.save();
    return newCate;
  } catch (error) {}
};

module.exports = CreateCateSv;
