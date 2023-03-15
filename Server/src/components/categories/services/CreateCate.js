const Category = require("../model/Category");

const CreateCateSv = async (name, type) => {
  try {
    const newCate = new Category({
      name,
      type,
    });
    await newCate.save();
    return newCate;
  } catch (error) {}
};

module.exports = CreateCateSv;
