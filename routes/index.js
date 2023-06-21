const {getWebInfo} = require('../controllers/index.controller')
const express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', getWebInfo);

module.exports = router;
