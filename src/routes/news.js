import express from "express";
import NewsController from "../app/controllers/NewsController.js";

const route = express.Router();

route.get("/", NewsController.index);

export default route;
