const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const RankPostSchema = new Schema({
    title: String,
    lists: [Number],
    total: Number,
    avg: Number,
    best: Number,
    worst: Number,
    date: {
        type: Date,
        default: Date.now(),
    },
});

// Model
const RankPost = mongoose.model("RankPost", RankPostSchema);

module.exports = RankPost;