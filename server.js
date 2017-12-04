const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  let path = __dirname + '/index.html';
  res.sendFile(path);
});
process.env.SLACK_API_KEY;

app.listen(process.env.PORT || 8080);
