var express = require('express');
var router = express.Router();

/* GET users listing. */
//http://localhost:3000/support
router.get('/support', function(req, res, next) {
    res.render('support');
});

module.exports = router;
