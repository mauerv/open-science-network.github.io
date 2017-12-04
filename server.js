const express = require('express');
const app = express();

app.use(express.static(__dirname));
// Since the root/src dir contains our index.html
app.get('/', function(req, res) {
  let path = __dirname + '/index.html';
  res.sendFile(path);
});

app.listen(process.env.PORT || 8080);
