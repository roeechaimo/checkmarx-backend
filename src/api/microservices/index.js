const fs = require('fs');

module.exports = function (app) {
  app.get('/api/microservices', async function (_req, res) {
    fs.readFile('./mocks/microservices/microservices.json', (_err, json) => {
      res.status(200);

      return res.json(JSON.parse(json));
    });
  });
};
