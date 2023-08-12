const Home = require('../models/homeModel');

// @desc    Get home page
// @route   GET /api/home
// @access  Public
const getHome = async (req, res, next) => {
    try {
        // const home = await Home.find();
        res.status(200).json({ message: 'Welcome to the home page!' });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getHome
};