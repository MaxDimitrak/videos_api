import express from 'express'
import {getVideosController} from "./videos/getVideosController";
import {deleteVideoController} from "./videos/deleteVideoController";
import {postVideoController} from "./videos/postVideoController";
import {putVideoController} from "./videos/putVideoController";


export const app = express()

app.use(express.json())

app.get('/videos', getVideosController)

app.get('/videos/:id', getVideosController)

app.delete('/videos/:id', deleteVideoController)

app.delete('/testing/all-data', deleteVideoController)

app.post('/videos', postVideoController)

app.put('/videos/:id', putVideoController)


