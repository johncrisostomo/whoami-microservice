let express = require('express');

let app = express();

app.get('/api/whoami', (res, req) => {

});

app.listen(process.env.PORT || 3000);
