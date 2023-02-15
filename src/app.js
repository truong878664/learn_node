import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import * as url from "url";
import route from "./routes/index.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const port = 3000;




app.use(morgan("combined"));

app.use(express.static(__dirname + "public"));
app.use(express.urlencoded());
app.use(express.json());

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.set("views", __dirname + "resources/views");

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
