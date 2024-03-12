"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const getVideosController_1 = require("./videos/getVideosController");
const deleteVideoController_1 = require("./videos/deleteVideoController");
const postVideoController_1 = require("./videos/postVideoController");
const putVideoController_1 = require("./videos/putVideoController");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.get('/videos', getVideosController_1.getVideosController);
exports.app.get('/videos/:id', getVideosController_1.getVideosController);
exports.app.delete('/videos/:id', deleteVideoController_1.deleteVideoController);
exports.app.delete('/testing/all-data', deleteVideoController_1.deleteVideoController);
exports.app.post('/videos', postVideoController_1.postVideoController);
exports.app.put('/videos/:id', putVideoController_1.putVideoController);
