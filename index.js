var port = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("Hello GitHub Actions Streaming - github-actions-deploy-docker-to-ec2");
});

app.listen( port, function () {
  console.log(`Listening on port ${port}!`);
});
