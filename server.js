const express = require('express')
const app = express()
const subdomain = require('express-subdomain')
const bodyParser = require('body-parser')
const sslRedirect = require('heroku-ssl-redirect')

const router = express.Router()

app.use(sslRedirect())

router.get('/', function(req, res) {
  let path = __dirname + '/token.html'
  res.sendFile(path)
})

app.use(subdomain('token', router))

app.use(express.static(__dirname))
app.use(bodyParser.urlencoded())

app.get('/', function(req, res) {
  let path = __dirname + '/index.html'
  res.sendFile(path)
});


app.listen(process.env.PORT || 8080)
