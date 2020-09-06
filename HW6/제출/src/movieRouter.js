import express from "express";
import routes from "./routes";
import {
  home,
  getCreate,
  postCreate,
  search,
  movieDetail,
  getEdit,
  postEdit,
  deleteMovie
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.get(routes.home, home);

movieRouter.get(routes.create, getCreate);
movieRouter.post(routes.create, postCreate);

movieRouter.get(routes.search, search);

movieRouter.get(routes.movieDetail(), movieDetail);

movieRouter.get(routes.editMovie(), getEdit);
movieRouter.post(routes.editMovie(), postEdit);

movieRouter.get(routes.deleteMovie(), deleteMovie);

export default movieRouter;
