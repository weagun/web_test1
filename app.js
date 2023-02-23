const express = require('express');
const app = express();
const port = 8002;

console.log("server.js execute")
console.log(app)
var counter = 0

app.get('/', (req, res) => {
  res.send('The server is working!:' + counter);
  counter ++
});

app.listen(port, () => {
  console.log(`server is listening on ${port} !!!`);
});