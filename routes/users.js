const { getUserToken, getUserInfo } = require('../controllers/user.controller')
const express = require('express');
const router = express.Router();

router.post('/login', getUserToken);
router.post('/info', getUserInfo);

module.exports = router;
