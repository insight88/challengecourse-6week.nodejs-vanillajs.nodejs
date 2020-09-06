export const localMW = (req, res, next) => {
  res.locals.siteName = "MovieInfo";
  next();
};
