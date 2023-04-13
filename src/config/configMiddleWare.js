import morgan from "morgan";
import methodOverride from "method-override";

const configMiddleWare = (app) => {
  app.use(morgan("combined"));
  app.use(methodOverride("_method"));
};

export default configMiddleWare;
