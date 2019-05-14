const { render, Routify } = require("lane-js")

let route = new Routify();

route.get("/", (req, res) => render(res, "index.ejs", { title: "LaneJs" }));

module.exports = route.expose();