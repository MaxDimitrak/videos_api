"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putVideoController = void 0;
const db_1 = require("../db/db");
const putVideoController = (req, res) => {
    const video = db_1.db.videos.find(v => v.id === +req.params.id);
    // if (!video){
    //     res
    //         .status(400)
    //         .send({
    //             "errorMessages":[
    //                 {
    //                     "message": "input parameters aren't correct"
    //                 },
    //                 {
    //                     "field": "idk"
    //                 },
    //             ]
    //         })
    //     return
    // }
    // function keysEqual(object1:any, object2:any){
    //     const keys1 = Object.keys(object1)
    //     const keys2 = Object.keys(object2)
    //
    //     if (keys1.length !== keys2.length)
    //         return false
    //     for(let key of keys1){
    //         if(object1[key] !== object2[key]){
    //             return false
    //         }
    //     }
    //     return true
    // }
    if (video) {
        res
            .status(204)
            .send(video);
    }
    else {
        res
            .status(400)
            .send({
            errorMessages: [
                {
                    message: "input parameters aren't correct"
                },
                {
                    field: "idk"
                },
            ]
        });
    }
};
exports.putVideoController = putVideoController;
