const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/homeController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getHome);

module.exports = router;