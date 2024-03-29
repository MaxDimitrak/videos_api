"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideoController = void 0;
const db_1 = require("../db/db");
const deleteVideoController = (req, res) => {
    const video = db_1.db.videos.find(v => v.id === +req.params.id);
    if (video !== undefined) {
        const videoIndex = db_1.db.videos.findIndex(v => v.id === +req.params.id);
        db_1.db.videos.splice(videoIndex, 1);
        res.sendStatus(204);
    }
    else if (Object.keys(req.params).length === 0) {
        db_1.db.videos = [];
        res.send(204, "All content is deleted");
    }
    else
        res.send(404);
};
exports.deleteVideoController = deleteVideoController;
