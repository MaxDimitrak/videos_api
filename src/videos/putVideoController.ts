import {Request, Response} from "express";
import {db} from "../db/db";
import {VideoDBType} from "../video_db_type";

type ErrorMessage = {
    message: string
    field: string
}

type ErrorResponseType = {
    errorMessages: ErrorMessage[]
}

type RequestValueType = {
    title: string
    author: string
    availableResolutions: string[]
}
export const putVideoController = (req: Request<{id:string},{}, RequestValueType>, res: Response<VideoDBType | ErrorResponseType | 404>) =>{
    const video = db.videos.find(v => v.id === +req.params.id)

   if(!video){
       res
           .send(404)
   }
   else{
       res
           .status(401)
           .send({
               errorMessages:[
                   {
                       message: "input parameters aren't correct",
                       field: "missed or wrong something"
                   },
               ]
           })
   }



}