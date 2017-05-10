let express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.end('This is a microservice that parses your request header. Try it by hitting this endpoint https://johncrisostomo-whoami.herokuapp.com/api/whoami');
});

app.get('/api/whoami', (req, res) => {
  res.set('Content-Type', 'application/json');
  let payload = {};

  payload.language = req.get('Accept-Language').split(',')[0];
  payload.ipv6address = req.ip;
  payload.ipv4address = req.ip.replace('::ffff:', '');
  payload.software= req.get('User-Agent').split(/\(([^\(]+)\)/)[1];

  res.json(payload);
});

app.listen(process.env.PORT || 3000);
