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

        const createdAtDate = new Date()
        const publicationDateFunc = (date: Date): Date =>  {
             return new Date(date.getDate() + 1)
        }
        const video:VideoDBType = {
            id: 4,
            title: data.title,
            author: data.author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: createdAtDate.toISOString(),
            publicationDate:publicationDateFunc(createdAtDate).toISOString() ,
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
                    field: "some value(s) in body is(are) wrong or missing"
                }
            ]
        })
    }

}