const express = require("express");

const router = express.Router();

const RankPost = require("../models/rankPost");

// Routes
router.get("/", (req, res) => {
    RankPost.find({})
        .sort({ total: 1 })
        .limit(10)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: "Could not fetch the document" });
        });
});

router.delete("/delete/:id", (req, res) => {
    RankPost.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json({ error: "Could not fetch the document" });
        });
});

router.post("/save", (req, res) => {
    const data = req.body;
    const newRankPost = new RankPost(data);

    newRankPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: "Sorry, internal server errors" });
            return;
        }

        return res.json({
            msg: "Your data has been saved",
        });
    });
});

module.exports = router;