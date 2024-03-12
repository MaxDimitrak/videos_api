import {Request, Response} from "express";
import {db} from "../db/db";
import {VideoDBType} from "../video_db_type";

export const putVideoController = (req: Request, res: Response) =>{
    const video = db.videos.find(v => v.id === +req.params.id)
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
   if(video){
       res
           .status(201)
           .send(video)
   }
   else{
       res
           .status(400)
           .send({
               "errorMessages":[
                   {
                       "message": "input parameters aren't correct"
                   },
                   {
                        "field": "idk"
                   },
               ]
           })
   }



}