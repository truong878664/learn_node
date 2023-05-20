const pathGoHome = ["/home", "/trangchu"];
export default function notFound(req, res) {
  pathGoHome.includes(req.path)
    ? res.redirect("/")
    : res.status(404).render("pages/404", { layout: false, path: req.path });
}
