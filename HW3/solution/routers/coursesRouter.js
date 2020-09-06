import express from "express";

import {
    courses,
    coursesnew,
    coursesmine
} from "../controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get("/", courses);
coursesRouter.get("/new", coursesnew);
coursesRouter.get("/mine", coursesmine);

export default coursesRouter;
