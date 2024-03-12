"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putVideoController = void 0;
const db_1 = require("../db/db");
const putVideoController = (req, res) => {
    const video = db_1.db.videos.find(v => v.id === +req.params.id);
    if (!video) {
        res
            .send(404);
    }
    else {
        res
            .status(400)
            .send({
            errorsMessages: [
                {
                    message: "input parameters aren't correct",
                    field: "missed or wrong something"
                },
            ]
        });
    }
};
exports.putVideoController = putVideoController;
