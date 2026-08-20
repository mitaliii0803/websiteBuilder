import expreess from "express"
import isAuth from "../middlewares/isAuth.js"
import {getCurrentUser } from "../controllers/user.controllers.js"

const userRouter=expreess.Router()


userRouter.get("/me",isAuth, getCurrentUser)
// userRouter.get("/gen", generatedemo)

export default userRouter

