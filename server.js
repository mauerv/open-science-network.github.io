const express = require('express')
const app = express()
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const sslRedirect = require('heroku-ssl-redirect')

app.use(sslRedirect())
app.use(express.static(__dirname))
app.use(bodyParser.urlencoded())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://www.osn.global");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  let path = __dirname + '/index.html'
  res.sendFile(path)
});

app.listen(process.env.PORT || 8080)
