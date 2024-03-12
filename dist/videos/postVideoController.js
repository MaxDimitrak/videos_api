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
        const createdAtDate = new Date();
        const publicationDateFunc = (date) => {
            const newDate = date.getTime() + 86400000;
            return new Date(newDate);
        };
        const video = {
            id: 4,
            title: data.title,
            author: data.author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: createdAtDate.toISOString(),
            publicationDate: publicationDateFunc(createdAtDate).toISOString(),
            availableResolutions: data.availableResolutions,
        };
        db_1.db.videos.push(video);
        res
            .status(201)
            .send(video);
    }
    else {
        res.status(400);
        res.send({
            errorsMessages: [
                {
                    message: "invalid data! missing title or author or availableResolutions",
                    field: "some value(s) in body is(are) wrong or missing"
                }
            ]
        });
    }
};
exports.postVideoController = postVideoController;
