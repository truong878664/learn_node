import express from "express";
import * as dotenv from "dotenv";
import route from "./routes/web.js";
import mongodb from "./config/database.js";

import * as url from "url";
import configViewEngine from "./config/configViewEngine.js";
import configMiddleWare from "./config/configMiddleWare.js";

dotenv.config();

export const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const port = process.env.PORT || 8080;

mongodb.connect();

configMiddleWare(app)
configViewEngine(app);

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
