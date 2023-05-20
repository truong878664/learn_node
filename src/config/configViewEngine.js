import { engine } from "express-handlebars";
import express from "express";
import { __dirname } from "../app.js";

const configViewEngine = (app) => {
  //config path public
  app.use(express.static(__dirname + "/public"));

  //config data to json
  app.use(express.urlencoded());
  app.use(express.json());

  //config view engine express handlebar
  app.engine(".hbs", engine({ extname: ".hbs" }));
  app.set("view engine", ".hbs");
  app.set("views", __dirname + "/resources/views");
  console.log(">>> dir", __dirname);
};

export default configViewEngine;
