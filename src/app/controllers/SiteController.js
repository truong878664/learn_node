import { promisePool } from "../../config/database.js";
import New from "../models/New.js";

class SiteController {
  async home(req, res) {
    const news = await New.find().lean();
    const [rows, fields] = await promisePool.query("SELECT * FROM news");
    console.log(fields)
    res.render("pages/home", { news, rows });
  }

  search(req, res) {
    res.render("pages/search");
  }
}

export default new SiteController();
