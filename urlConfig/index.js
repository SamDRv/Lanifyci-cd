const { render, Routify } = require("lane-js")

let route = new Routify();

// route.get("/", (req, res) => render(res, "index.ejs", { title: "LaneJs" }));
route.get("/", (req, res) => res.end("Hello World"));

module.exports = route.expose();