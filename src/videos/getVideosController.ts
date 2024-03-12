import  {Request, Response} from "express";
import {db} from "../db/db";
import {VideoDBType} from "../video_db_type";

export const getVideosController = (req: Request<{id: string}>, res: Response<VideoDBType[] | VideoDBType>)=> {

    if(Object.keys(req.params).length === 0){
        res
            .status(200)
            .json(db.videos)
    }else{
        const video = db.videos.find(v => v.id === +req.params.id)
        if(video)
            res
                .status(200)
                .send(video)
        else
            res.sendStatus(404)
    }

}
