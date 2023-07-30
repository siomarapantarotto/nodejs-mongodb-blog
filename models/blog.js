const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema to define the structure of a blog
const blogSchema = new Schema({
    title: {
        type: String,
        required:true,
    },

    snippet: {
        type: String,
        required:true,
    },

    body: {
        type: String,
        required:true,
    },

}, { timestamps: true }); // Mongo handles timestamp automatically

// 'Blog' will be pluralized to match 'blogs' in the database
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
