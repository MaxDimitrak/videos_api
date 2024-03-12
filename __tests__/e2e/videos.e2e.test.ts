import {req} from "../test_helpers";
import {SETTINGS} from "../../src/settings";


describe('/testing', ()=>{
    it('should delete all data and receive code 204 with description All data is deleted', async ()=>{
        await req
            .delete('/testing/all-data')
            .expect(204)
        const res = await req
            .get('/videos')
            .expect(200)
        expect(res.body.length).toBe(0)
    })
})

describe('/videos', ()=>{

///////////////////////////////  get requests
    it('should return 200', async ()=>{
        await req
            .get('/videos')
            .expect(200)
    })
    it('should return 200 id found video by id', async()=>{
        await req
            .get('/videos/1')
            .expect(200)
    })
    it('should return 404', async()=>{
        await req
            .get('/videos/5')
            .expect(404)
    })
///////////////////////////////

///////////////////////////////delete requests
    it('should return status 204 and No Content', async()=>{
        await req
            .delete('/videos/1')
            .expect(204)
    })
    it('shouldn\'t return status 204 and No Content', async()=>{
         await req
            .delete('/videos/5')
            .expect(404)
    })
///////////////////////////////

///////////////////////////////post requests
    it("should return 201 and created video", async () =>{
      const video = {
        title: "bears",
        author: "Maksim",
        availableResolutions: [ 'P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160' ]
    }
    const res = await req
        .post('/videos')
        .send(video)
        .expect(201)

})
    it('should return 400 and error message', async ()=>{
        await req
            .post('/videos')
            .send( {
                title: "bears",
                // author: "Maksim",
                availableResolutions: [ 'P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160' ]
            })
            .expect(400)
    })
///////////////////////////////

///////////////////////////////put requests
//     it('should return the 201 no content', async ()=>{
//          await req
//             .put('/videos/1')
//             .send(
//                 {
//                     "title": "string",
//                     "author": "string",
//                     "availableResolutions": [
//                         "P144"
//                     ],
//                     "canBeDownloaded": true,
//                     "minAgeRestriction": 18,
//                     "publicationDate": "2024-02-28T03:51:08.249Z"
//                 }
//             )
//             .expect(201)
//     })
    // it('should return the 201 no content', async ()=>{
    //     await req
    //         .put('/videos/1')
    //         .send(
    //             {
    //                 "title": "string",
    //                 "author": "string",
    //                 "availableResolutions": [
    //                     "P144"
    //                 ],
    //                 "canBeDownloaded": true,
    //                 "minAgeRestriction": 18,
    //                 "publicationDate": "2024-02-28T03:51:08.249Z"
    //             }
    //         )
    //         .expect(201)
    // })
})
///////////////////////////////

