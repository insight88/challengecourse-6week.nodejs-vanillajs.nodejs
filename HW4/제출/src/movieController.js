import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

const videos = getMovies()
const video = getMovieById(18634)

export const home = (req, res) => {
  res.render("index", { pageTitle: "Movies", videos});
  console.log(videos)
}
export const movieDetail = (req, res) => res.render("detail", { pageTitle: "Movie Detail", video});
export const filterMovie = (req, res) => res.render("movies", { pageTitle: "Searching..."})