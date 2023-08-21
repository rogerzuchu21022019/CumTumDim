const express = require(`express`);
const route = express.Router();

route.get(`/search-query/:query`, (req, res) => {
  try {
    const {query} = req.params;
    console.log("🚀 ~ file: Search.js:7 ~ route.all ~ query:", query);
  } catch (error) {
    console.log("🚀 ~ file: Search.js:8 ~ route.all ~ error:", error);
  }
});

module.exports = route;
