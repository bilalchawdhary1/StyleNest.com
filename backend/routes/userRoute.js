import express from "express";
import {
  adminLogin,
  loginUser,
  singUpUser,
} from "../controllers/user_controller.js";

const userRouter = express.Router();

userRouter.post("/admin", adminLogin);
userRouter.post("/login", loginUser);
userRouter.post("/signup", singUpUser);


export default userRouter;
