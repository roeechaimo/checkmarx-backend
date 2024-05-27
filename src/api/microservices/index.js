const JsonReader = require('./../../services/jsonReader');
const jsonReader = new JsonReader('./mocks/microservices/microservices.json');

module.exports = function (app) {
  app.get('/api/microservices', async function (_req, res) {
    try {
      const json = await jsonReader.readJson();

      return res.status(200).json(json);
    } catch (e) {
      return res.status(500).json(jsonReader.generateError(e));
    }
  });
};
