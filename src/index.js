/**
 * this serts up the app and starts the server
 */
const server = require("./server/index");
const serverPort = 8080;

process.on("uncaughtException", function(err) {
  console.error(new Date().toUTCString() + " uncaughtException:", err.message);
  console.error(err.stack);
  process.exit(1);
});

process.on("unhandledRejection", reason => {
  console.log("Reason: " + reason);
});

server.start((err, app) => {
  app.listen(serverPort, e => {
    console.log("listening on port " + serverPort);
  });
});
