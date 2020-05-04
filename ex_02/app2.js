
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Great ! It works.')
}).listen(4242);


  console.log('Example app listening on port 4242!');
