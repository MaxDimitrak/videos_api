"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideosController = void 0;
const db_1 = require("../db/db");
const getVideosController = (req, res) => {
    if (Object.keys(req.params).length === 0) {
        res
            .status(200)
            .json(db_1.db.videos);
    }
    else {
        const video = db_1.db.videos.find(v => v.id === +req.params.id);
        if (video)
            res
                .status(200)
                .send(video);
        else
            res.sendStatus(404);
    }
};
exports.getVideosController = getVideosController;
