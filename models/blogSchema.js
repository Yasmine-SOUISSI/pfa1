const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title:String,
    photo:String,
    description:String,
    date:Date,
    blogLink:String,
});

module.exports = mongoose.model("Blog", BlogSchema);
