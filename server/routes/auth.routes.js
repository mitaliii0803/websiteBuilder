import expreess from "express"
import { googleAuth, logOut } from "../controllers/auth.controller.js"
const authRouter=expreess.Router()

authRouter.post("/google",googleAuth)
authRouter.get("/logout",logOut)

export default authRouter

// http:localhost:8000/api/auth/logout