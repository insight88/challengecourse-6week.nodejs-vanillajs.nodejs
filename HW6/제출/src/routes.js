const HOME = "/";
const CREATE = "/create";
const SEARCH = "/search";
const DETAIL = "/:id";
const EDIT = "/:id/edit";
const DELETE = "/:id/delete";

const routes = {
  home: HOME,
  create: CREATE,
  search: SEARCH,
  movieDetail: id => {
    if (id) {
      return `/${id}`;
    } else {
      return DETAIL;
    }
  },
  editMovie: id => {
    if (id) {
      return `/${id}/edit`;
    } else {
      return EDIT;
    }
  },
  deleteMovie: id => {
    if (id) {
      return `/${id}/delete`;
    } else {
      return DELETE;
    }
  }
};

export default routes;
