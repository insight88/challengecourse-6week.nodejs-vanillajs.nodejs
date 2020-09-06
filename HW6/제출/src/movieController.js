/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
import routes from "./routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const getCreate = (req, res) => {
  res.render("create", { pageTitle: "Create" });
};

export const postCreate = async (req, res) => {
  const {
    body: { title, year, rating, synopsis, genres }
  } = req;
  try {
    const array = await genres.split(",");
    const movie = await Movie.create({
      title,
      year,
      rating,
      synopsis,
      genres: array
    });
    res.redirect(routes.movieDetail(movie._id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const search = async (req, res) => {
  const {
    query: { year }
  } = req;
  const {
    query: { rating }
  } = req;
  try {
    if (year) {
      const searchYear = await Movie.find({
        year: { $eq: year }
      });
      res.render("search", { searchYear, year });
    } else if (rating) {
      const searchRating = await Movie.find({
        rating: { $gte: rating }
      });
      res.render("search", { searchRating, rating });
    } else {
      res.status(404);
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("detail", { pageTitle: movie.title, movie, id });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEdit = (req, res) => {
  res.render("edit", { pageTitle: "Edit" });
};

export const postEdit = async (req, res) => {
  const {
    body: { title, year, rating, synopsis, genres },
    params: { id }
  } = req;
  try {
    const genreArray = await genres.split(",");
    await Movie.findOneAndUpdate(
      { _id: id },
      { title, year, rating, synopsis, genreArray }
    );
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteMovie = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Movie.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect("home", { pageTitle: "Home" });
};
