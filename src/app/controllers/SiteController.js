import New from "../models/New.js";

class SiteController {
  home(req, res) {
    New.find()
      .lean()
      .then((news) => res.render("pages/home", { news }));
  }

  search(req, res) {
    res.render("pages/search");
  }
}

export default new SiteController();
