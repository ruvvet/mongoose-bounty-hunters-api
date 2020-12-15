require('dotenv').config();
const express = require('express');

const models = require('./models');

const app = express();


app.use(express.urlencoded())
app.use(express.json())
app.use('/bounties', require('./controllers/bountiesController'))

app.get('/', main);

function main(req, res) {
  res.send('hi');
}

app.listen(process.env.PORT || 7000);
