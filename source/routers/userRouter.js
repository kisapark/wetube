import express from "express";
import { editAccount , removeAccount , logout , seeUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", editAccount);
userRouter.get("/remove",removeAccount)
userRouter.get(":id", seeUser);
export default userRouter;