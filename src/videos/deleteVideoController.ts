import {Request} from "express";
import {db} from "../db/db";

export const deleteVideoController = (req:Request<{id:string}>, res) =>{

    const video = db.videos.find(v => v.id === +req.params.id)
    if(video !== undefined) {
        const videoIndex = db.videos.findIndex(v => v.id === +req.params.id)
        db.videos.splice(videoIndex, 1)
        res.sendStatus(204)
    }
    else if(Object.keys(req.params).length === 0){
        db.videos=[]
        res.status(204)
        res.send("All content is deleted")
    }
    else
        res.sendStatus(404)
    }
