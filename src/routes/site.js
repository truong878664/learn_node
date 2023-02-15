import express from "express";
import SiteController from "../app/controllers/SiteController.js";

const route = express.Router();

route.use("/search", SiteController.search);
route.use("/", SiteController.home);

export default route;
