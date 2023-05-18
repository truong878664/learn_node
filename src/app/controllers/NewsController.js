import New from "../models/New.js";

class NewsController {
  // [GET] /news
  async index(req, res, next) {
    try {
      const news = await New.find({}).lean();
      res.render("pages/news", { news });
    } catch (error) {
      next(err);
    }
  }

  // [GET] /news/upload
  upload(req, res, next) {
    res.render("pages/upload");
  }

  // [POST] /news/upload
  async store(req, res, next) {
    const data = req.body;
    try {
      await New.create(data);
      res.redirect("/news");
    } catch (error) {
      console.log(error);
    }
  }

  //[DELETE] /news/:id/delete
  async destroy(req, res, next) {
    try {
      await New.deleteOne({ _id: req.params.id });
      res.redirect("back");
    } catch (error) {
      next(error);
    }
  }

  // [GET] /news/edit/:id
  async edit(req, res, next) {
    try {
      const newItem = await New.findOne({ _id: req.params.id }).lean();
      res.render("pages/edit", { newItem });
    } catch (error) {}
  }

  //[PUT] /news/update/:id
  async update(req, res, next) {
    try {
      const { title, description, image } = req.body;
      await New.updateOne({ _id: req.params.id }, { title, description, image });
      res.redirect("/news");
    } catch (error) {}
  }
}

export default new NewsController();
