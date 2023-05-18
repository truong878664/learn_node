import express from "express";
import NewsController from "../../app/controllers/NewsController.js";

const newsRoute = express.Router();

newsRoute.get("/edit/:id", NewsController.edit);
newsRoute.put("/update/:id", NewsController.update);
newsRoute.post("/upload", NewsController.store);
newsRoute.delete("/:id/delete", NewsController.destroy);
newsRoute.get("/upload", NewsController.upload);
newsRoute.get("/", NewsController.index);

export default newsRoute;
