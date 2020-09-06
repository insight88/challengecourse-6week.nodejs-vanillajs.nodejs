import express from "express"

import { home, join, login, confirm} from "../controllers/globalController"

const globalRouter = express.Router()

globalRouter.get("/", home)
globalRouter.get("/join", join)
globalRouter.get("/login", login)
globalRouter.get("/confirm", confirm)

export default globalRouter;