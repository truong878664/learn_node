import newsRoute from "./site/news.js";
import siteRoute from "./site/site.js";

const route = (app) => {
  app.use("/news", newsRoute);
  app.use("/", siteRoute);
};

export default route;
