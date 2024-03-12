import {VideoDBType} from "../video_db_type";

export type DBType = {
    videos: VideoDBType[]
}

export const db:DBType = {
    videos: [
        {
            id: 1,
            title: "cats",
            author: "Maksim",
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: new Date().toDateString(),
            publicationDate: new Date().toDateString(),
            availableResolutions: [ 'P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160' ]
        },
        {
            id: 2,
            title: "dogs",
            author: "Maksim",
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: new Date().toDateString(),
            publicationDate: new Date().toDateString(),
            availableResolutions: [ 'P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160' ]
        },
        {
            id: 3,
            title: "dolphins",
            author: "Maksim",
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: new Date().toDateString(),
            publicationDate: new Date().toDateString(),
            availableResolutions: [ 'P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160' ]
        }
    ],
}


export const setDB = (dataset?: Partial<DBType>) =>{
    if(!dataset){
        return ;
    }
    db.videos = dataset.videos || db.videos
}