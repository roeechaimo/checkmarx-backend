module.exports = function (app) {
  app.get('/api/health_check', async function (_req, res) {
    return res.send('App is healthy');
  });
};
