const express = require('express')
const app = express()
const fetch = require('node-fetch')
const bodyParser = require('body-parser')

app.use(express.static(__dirname))
app.use(bodyParser.urlencoded())

app.get('/', function(req, res) {
  let path = __dirname + '/index.html'
  res.sendFile(path)
});

app.post('/', function(req, res) {
  const slackTeam = 'open-science-network'
  const token = process.env.SLACK_API_TOKEN
  const email = req.body.email
  const url = `https://${slackTeam}.slack.com/api/users.admin.invite`

  fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `token=${token}&email=${email}`
  }).then(function(data) {
    return data.text();
  }).then(function(data) {
      res.send(data);
  })
})

app.listen(process.env.PORT || 8080)
