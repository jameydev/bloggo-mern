const express = require('express');
const router = express.Router();
const { getPosts } = require('../controllers/feedController');

router.route('/').get(getPosts);

module.exports = router;