import express from "express";
import { seeVideos , editVideos , uploadVideos , removeVideos } from "../controllers/videoControlelr";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideos);
videoRouter.get("/:id(\\d+)", seeVideos);
videoRouter.get("/:id(\\d+)/edit", editVideos);
videoRouter.get("/:id(\\d+)/remove", removeVideos);

export default videoRouter;