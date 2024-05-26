const resourcesRoutes = require('./resources/index.js');
const microservicesRoutes = require('./microservices/index.js');
const healthCheckRoutes = require('./health/index.js');
const faviconRoutes = require('./favicon/index.js');

module.exports = function (app) {
  resourcesRoutes(app);
  microservicesRoutes(app);
  healthCheckRoutes(app);
  faviconRoutes(app);
};
