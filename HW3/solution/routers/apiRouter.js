import express from "express";

import v1Router from "./api/v1Router";
import v2Router from "./api/v2Router";

import { apidoc } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get("/", apidoc);
apiRouter.use("/v1", v1Router);
apiRouter.use("/v2", v2Router);

export default apiRouter;
