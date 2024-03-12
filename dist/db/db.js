"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDB = exports.db = void 0;
exports.db = {
    videos: [
        {
            id: 1,
            title: "cats",
            author: "Maksim",
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: new Date().toDateString(),
            publicationDate: new Date().toDateString(),
            availableResolutions: ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160']
        },
        {
            id: 2,
            title: "dogs",
            author: "Maksim",
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: new Date().toDateString(),
            publicationDate: new Date().toDateString(),
            availableResolutions: ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160']
        },
        {
            id: 3,
            title: "dolphins",
            author: "Maksim",
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: new Date().toDateString(),
            publicationDate: new Date().toDateString(),
            availableResolutions: ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160']
        }
    ],
};
const setDB = (dataset) => {
    if (!dataset) {
        return;
    }
    exports.db.videos = dataset.videos || exports.db.videos;
};
exports.setDB = setDB;
