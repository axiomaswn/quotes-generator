var express = require('express');
var router = express.Router();

var controllers = require('../controllers/quotes')
/* GET home page. */
router.get('/',controllers.random)

module.exports = router;
