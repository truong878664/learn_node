import express from "express";
import SiteController from "../app/controllers/SiteController.js";

const route = express.Router();

route.get("/search", SiteController.search);
route.get("/", SiteController.home);

export default route;
