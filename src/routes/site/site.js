import express from "express";
import SiteController from "../../app/controllers/SiteController.js";

const siteRoute = express.Router();

siteRoute.get("/search", SiteController.search);
siteRoute.get("/", SiteController.home);

export default siteRoute;
