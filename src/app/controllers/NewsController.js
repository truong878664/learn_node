class NewsController {
  index(req, res) {
    res.render("pages/news");
  }
}

export default new NewsController();
