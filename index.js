const express = require('express');


const postsRepo = require('./repositories/postsRepo');
const app = express();
let counter = 0;

app.get('/', (req, res) => {
  counter++
  res.send(``)
})

app.post('/', (req, res) => {
  console.log(req);
  res.send(String(counter))
})

app.listen( 3000, () => {
  console.log('Listening')
})