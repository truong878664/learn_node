import { engine } from "express-handlebars";
import express from "express";
import { __dirname } from "../app.js";

const configViewEngine = (app) => {
  app.use(express.static(__dirname + "/public"));
  app.use(express.urlencoded());
  app.use(express.json());

  app.engine(".hbs", engine({ extname: ".hbs" }));
  app.set("view engine", ".hbs");
  app.set("views", __dirname + "/resources/views");
  console.log(">>> dir", __dirname);
};

export default configViewEngine;
