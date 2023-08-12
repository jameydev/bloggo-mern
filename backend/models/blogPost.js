const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
    },
    body: {
        type: String,
        required: [true, 'Please add a body'],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);
