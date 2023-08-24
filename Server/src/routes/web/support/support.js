var express = require('express');
var router = express.Router();

/* GET users listing. */
//http://localhost:3000/support
router.get('/support', function(req, res, next) {
    res.render('support');
});

//http://localhost:3000/thanks
router.get('/thanks', function(req, res, next) {
    res.render('thanks');
});

module.exports = router;
