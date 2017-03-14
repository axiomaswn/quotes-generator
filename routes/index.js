var express = require('express');
var router = express.Router();

var controllers = require('../controllers/quotes')
/* GET home page. */
router.get('/',controllers.random)

router.get('/quotes',controllers.list)

router.post('/quotes',controllers.add)

module.exports = router;
