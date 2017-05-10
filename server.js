let express = require('express');

let app = express();

app.get('/api/whoami', (req, res) => {
  let payload = {
    ipaddress: null,
    language: null,
    software: null,
  };

  payload.language = req.get('Accept-Language').split(',')[0];
  payload.ipaddress = req.ip;
  payload.software= req.get('User-Agent').split(/\(([^\(]+)\)/)[1];

  res.json(payload);
});

app.listen(process.env.PORT || 3000);
