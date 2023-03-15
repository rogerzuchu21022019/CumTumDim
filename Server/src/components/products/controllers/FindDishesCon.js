const FindDishesSv = require("../services/FindDishesSv");

const FindDishesCon = async (req, res) => {
  try {
    const dishes = await FindDishesSv();
    return dishes;
  } catch (error) {}
};

module.exports = FindDishesCon;
