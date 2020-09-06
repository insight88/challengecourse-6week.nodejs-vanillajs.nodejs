export const home = (req, res) => res.render("index", { pageTitle: "Home" });
export const login = (req, res) => res.render("index", { pageTitle: "Login" });
export const photos = (req, res) =>
  res.render("index", { pageTitle: "Photos" });
export const profile = (req, res) =>
  res.render("index", { pageTitle: "Profile" });
