module.exports = function (app) {
  app.get('/favicon.ico', (_req, res) => {
    res.status(204);

    return res.send();
  });
};
