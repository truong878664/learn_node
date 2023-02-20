import newsRoute from "./news.js";
import siteRoute from "./site.js";

export default function route(app) {
  app.use("/news", newsRoute);

  app.use("/", siteRoute);
}
