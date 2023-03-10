import New from "../models/New.js";

class NewsController {
  index(req, res, next) {
    New.find({})
      .lean()
      .then((news) => res.render("pages/news", { news }))
      .catch((err) => next(err));
  }

  upload(req, res, next) {
    res.render("pages/upload");
  }

  store(req, res, next) {
    const data = req.body;
    New.create(data)
      .then(() => res.redirect("/news"))
      .catch((err) => console.log(err));
  }

  destroy(req, res, next) {
    New.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

export default new NewsController();
