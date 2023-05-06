import New from "../models/New.js";

class NewsController {
  async index(req, res, next) {
    try {
      const news = await New.find({}).lean();
      res.render("pages/news", { news });
    } catch (error) {
      next(err);
    }
  }

  upload(req, res, next) {
    res.render("pages/upload");
  }

  async store(req, res, next) {
    const data = req.body;
    try {
      await New.create(data);
      res.redirect("/news");
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(req, res, next) {
    try {
      await New.deleteOne({ _id: req.params.id });
      res.redirect("back");
    } catch (error) {
      next(error);
    }
  }
}

export default new NewsController();
