import express from "express";
import { seeVideos , editVideos , saveEdits, uploadVideos , deleteVideos , getUpload , postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", seeVideos);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(editVideos).post(saveEdits);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideos);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;