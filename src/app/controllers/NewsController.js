import New from "../models/New.js";

class NewsController {
  index(req, res, next) {
    New.find({})
      .lean()
      .then((news) => res.render("pages/home", { news }))
      .catch((err) => next(err));
  }
}

export default new NewsController();
