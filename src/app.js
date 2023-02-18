import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import * as dotenv from "dotenv";

import route from "./routes/index.js";
import db from "./config/database.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = 3000;

db.connect();

app.use(morgan("combined"));

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded());
app.use(express.json());

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", __dirname + "/resources/views");

route(app);
console.log(__dirname)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
