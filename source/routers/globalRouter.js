import express from "express";
import { trendingVideos } from "../controllers/videoControlelr";
import { join } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trendingVideos);
globalRouter.get("/join", join);
export default globalRouter;