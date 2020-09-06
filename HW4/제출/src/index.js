import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";
import { localMW } from "./middleware";
import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(localMW);
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`✅  Server Ready!`));
app.listen(PORT, handleListening);


