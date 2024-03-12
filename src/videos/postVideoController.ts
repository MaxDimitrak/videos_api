import {Request, Response} from "express";
import {VideoDBType} from "../video_db_type";
import {db} from "../db/db";

type RequestValueType = {
    title: string
    author: string
    availableResolutions: string[]
}
type ErrorMessage = {
    message: string
    field: string
}

type ErrorResponseType = {
    errorMessages: ErrorMessage[]
}
export const postVideoController = (req: Request<{},{},RequestValueType>, res: Response<VideoDBType | ErrorResponseType>) =>{
    const data  = req.body
    function isCorrectData(data: RequestValueType): boolean{
        if (!data.author)
            return false
        if (!data.title)
            return false
        if (!data.availableResolutions)
            return false
        return true
    }
    if(isCorrectData(data)){

        const video:VideoDBType = {
            id: 4,
            title: data.title,
            author: data.author,
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: new Date().toDateString(),
            publicationDate:  new Date().toDateString(),
            availableResolutions: data.availableResolutions,
        }
        db.videos.push(video)
        res
            .status(201)
            .send(video)
    }else{
        res.status(400)
        res.json({
            errorMessages:[
                {
                    message: "invalid data! missing title or author or availableResolutions",
                    field: ""
                }
            ]
        })
    }

}