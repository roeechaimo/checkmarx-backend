const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(cors());

require('./api/routes')(app);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
