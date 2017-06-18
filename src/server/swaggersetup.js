var swaggerTools = require("swagger-tools");
var swaggerObj = require("../api/swagger/index.json");
var jr = require("json-refs");

const sw = (app, swaggerObj, cb) => {
  // swaggerRouter configuration
  var options = {
    swaggerUi: "/swagger.json",
    controllers: "src/api/controllers/",
    useStubs: false // Conditionally turn on stubs (mock mode)
  };

  // The Swagger document (require it, build it programmatically, fetch it from a URL, ...)

  // Initialize the Swagger middleware
  swaggerTools.initializeMiddleware(swaggerObj, function(middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator({ validateResponse: true }));

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    cb(null, app);
  });
};

module.exports = (app, cb) => {
  jr
    .resolveRefs(swaggerObj, { location: "./src/api/swagger/index.json" })
    .then(result => {
      sw(app, result.resolved, cb);
    })
    .catch(e => {
      console.log("e", e);
    });
};
