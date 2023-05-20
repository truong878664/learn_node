import newsRoute from "./site/news.js";
import notFound from "./site/notFound.js";
import siteRoute from "./site/site.js";

const route = (app) => {
  app.use("/news", newsRoute);
  app.use("/", siteRoute);
  app.use(notFound)
};



export default route;
