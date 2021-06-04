import express from "express";
import { seeVideos , editVideos , uploadVideos , removeVideos } from "../controllers/videoControlelr";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideos);
videoRouter.get("/:id", seeVideos);
videoRouter.get("/:id/edit", editVideos);
videoRouter.get("/:id/remove", removeVideos);

export default videoRouter;