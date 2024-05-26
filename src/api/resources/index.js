const fs = require('fs');

module.exports = function (app) {
  app.get('/api/resources', async function (_req, res) {
    fs.readFile('./mocks/resources/resources.json', (_err, json) => {
      res.status(200);

      return res.json(JSON.parse(json));
    });
  });
};
