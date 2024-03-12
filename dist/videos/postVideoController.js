"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postVideoController = void 0;
const db_1 = require("../db/db");
const postVideoController = (req, res) => {
    const data = req.body;
    function isCorrectData(data) {
        if (!data.author)
            return false;
        if (!data.title)
            return false;
        if (!data.availableResolutions)
            return false;
        return true;
    }
    if (isCorrectData(data)) {
        const video = {
            id: 4,
            title: data.title,
            author: data.author,
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: new Date().toDateString(),
            publicationDate: new Date().toDateString(),
            availableResolutions: data.availableResolutions,
        };
        db_1.db.videos.push(video);
        res
            .status(201)
            .send(video);
    }
    else {
        res.status(400);
        res.json({
            errorMessages: [
                {
                    message: "invalid data! missing title or author or availableResolutions",
                    field: ""
                }
            ]
        });
    }
};
exports.postVideoController = postVideoController;
