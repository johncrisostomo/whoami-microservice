let express = require('express');

let app = express();

app.get('/api/whoami', (req, res) => {
  let payload = {
    ipaddress: null,
    language: null,
    software: null,
  };

  payload.language = req.get('Accept-Language').split(',')[0];
  payload.ipv6address = req.ip;
  payload.ipv4address = req.ip.replace('::ffff:', '');
  payload.software= req.get('User-Agent').split(/\(([^\(]+)\)/)[1];

  res.json(payload);
});

app.listen(process.env.PORT || 3000);
