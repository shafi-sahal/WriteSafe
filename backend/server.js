const http = require("http");
const app = require("./app");
const debug = require("debug")("node-angular");

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNan(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " rerquires elevated privileges");
      process.exit();
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use ");
      process.exit(1);
      break;

    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listtening on " + bind);
};

const port = process.env.PORT || "3000";

app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
