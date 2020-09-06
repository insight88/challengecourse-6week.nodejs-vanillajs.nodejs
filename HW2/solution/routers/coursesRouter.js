import express from "express";
import { courses, newC, mine } from "../controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get("/", courses);
coursesRouter.get("/new", newC);
coursesRouter.get("/mine", mine);

export default coursesRouter;
