const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Got a GET request at /');
  res.send('Hello from express');
})

app.listen(8081);

console.log('Listening on port 8081');
