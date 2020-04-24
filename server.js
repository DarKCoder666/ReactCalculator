const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const journal = [
  {"calculation":"20+7*12-56/23", "date":"12:23:35 01-01-2015Z"},
  {"calculation":"21+7*12-56/23", "date":"12:23:35 01-01-2015Z"},
  {"calculation":"22+7*12-56/23", "date":"12:23:35 01-01-2015Z"},
  {"calculation":"23+7*12-56/23", "date":"12:23:35 01-01-2015Z"},
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/calculations', (req, res) => {
  res.send({ calculations: journal });
});

app.post('/api/calculations', (req, res) => {
  res.send({status: 200});
});

app.listen(port, () => console.log(`Listening on port ${port}`));