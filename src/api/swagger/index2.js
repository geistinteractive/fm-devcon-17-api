const Product = require("./Product.json");

const swagger = {
  swagger: "2.0"
};

swagger.info = {
  description: "you can do so many awesome things with it",
  version: "1.0.1",
  title: "Kart API",
  contact: {
    name: "Todd Geist",
    email: "todd@geistinteractive.com"
  }
};

swagger.paths = Product.paths;
swagger.definitions = Product.definitions;

module.exports = swagger;
