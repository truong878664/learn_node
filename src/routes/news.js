import express from "express";
import NewsController from "../app/controllers/NewsController.js";

const route = express.Router();

route.post("/upload", NewsController.store);
route.delete("/:id/delete", NewsController.destroy);
route.get("/upload", NewsController.upload);

route.get("/", NewsController.index);

export default route;
