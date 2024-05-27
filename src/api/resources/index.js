const JsonReader = require('./../../services/jsonReader');
const jsonReader = new JsonReader('./mocks/resources/resources.json');

module.exports = function (app) {
  app.get('/api/resources', async function (_req, res) {
    try {
      const json = await jsonReader.readJson();

      return res.status(200).json(json);
    } catch (e) {
      return res.status(500).json(jsonReader.generateError(e));
    }
  });
};
