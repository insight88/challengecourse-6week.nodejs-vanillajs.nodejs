import express from "express";

import { apidoc, remove, edit } from "../../controllers/apiController";

const v2Router = express.Router();

v2Router.get("/", apidoc);
v2Router.get("/remove", remove);
v2Router.get("/edit", edit);

export default v2Router;
