import express from "express";
import { trendingVideos } from "../controllers/videoController";
import { join } from "../controllers/userController";
import { search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trendingVideos);
globalRouter.get("/join", join);
globalRouter.get("/search", search);
export default globalRouter;