class SiteController {
  home(req, res) {
    res.render("pages/home");
  }

  search(req, res) {
    res.render("pages/search");
  }
}

export default new SiteController();
