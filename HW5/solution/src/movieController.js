import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie, pageTitle: movie.title });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
export const add = (req, res) => {
  if (req.method === "GET") {
    return res.render("add", { pageTitle: "Add Movie" });
  } else if (req.method === "POST") {
    const {
      body: { title, genres, synopsis }
    } = req;
    addMovie({ title, synopsis, genres: genres.split(",") });
    return res.redirect("/");
  }
};
