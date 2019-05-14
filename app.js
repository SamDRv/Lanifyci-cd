const { Server, Routify, pathify } = require("lane-js");
const urlConfig = require('./urlConfig')
const cors = require("cors");
const morgan = require("morgan");

const serverOptions = {
  urls: urlConfig,
  template_directory: "views",
  template_engine: 'hbs',
  template_static: "public",
  middlewares: [
    cors(),
    morgan('dev')
  ]
}

let app = Server(serverOptions)

app.listen(3000, _ => console.log("Server is up and running at 3000"))

module.exports = app