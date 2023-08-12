const Posts = require('../models/blogPost');

// @desc    Get post feed
// @route   GET /api/posts
// @access  Public
const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getPosts
};