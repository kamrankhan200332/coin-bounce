const mongoose = require("mongoose");
// const { Schema } = mongoose;

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    photoPath: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true });

// export const Blog = mongoose.model("Blog", blogSchema);
module.exports = mongoose.model('Blog', blogSchema, 'blogs');