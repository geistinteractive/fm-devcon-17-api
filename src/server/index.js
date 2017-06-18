const app = require("express")();
const swaggerSetup = require("./swaggersetup");

module.exports.start = cb => {
  swaggerSetup(app, cb);
};
