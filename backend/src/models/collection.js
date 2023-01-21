const mongoose = require("mongoose");

// creating schema for fetching data from landing page form

const instaSchema = new mongoose.Schema({
    file: String,
    author: String,
    location: String,
    description: String,
    postedAt: { 
        type: String,
        default: () => new Date().toString().split('T')[0]
    }
})

const instaDB_collection= mongoose.model("instaDB_collection", instaSchema);

module.exports = instaDB_collection ;