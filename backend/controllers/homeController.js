const Home = require('../models/Home');

// @desc    Get home page
// @route   GET /api/home
// @access  Public
const getHome = async (req, res, next) => {
    try {
        const home = await Home.find();
        res.status(200).json(home);
    } catch (err) {
        next(err);
    }
}