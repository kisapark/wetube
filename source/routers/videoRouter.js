import express from "express";
import { seeVideos , editVideos , saveEdits, uploadVideos , removeVideos , getUpload , postUpload } from "../controllers/videoControlelr";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", seeVideos);
videoRouter.route("/:id(\\d+)/edit").get(editVideos).post(saveEdits);
videoRouter.get("/:id(\\d+)/remove", removeVideos);

videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;