var express = require('express');
var router = express.Router();
var quotesController = require("../controllers/quotes")

router.get('/', quotesController.list)

router.post('/', quotesController.add)

module.exports = router;
