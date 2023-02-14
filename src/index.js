import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path, { dirname } from "path";

import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("combined"));

app.engine(".hbs", engine({extname: '.hbs'}));
app.set("view engine", ".hbs");

app.set("views", __dirname + "resources/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
