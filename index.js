'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/cat', (req, res) => {
  console.log('get cat');
  res.send('Hello cat!')
});

app.post('/cat', (req, res) => {
console.log('post cat');
res.send('post cat');
});

app.put('/cat', (req, res) => {
  console.log('put cat');
  res.send('put cat');
});

  app.delete('/cat', (req, res) => {
    console.log('delete cat');
    res.send('delete cat');
});


app.listen(port, () => console.log(`Example app listening at http://localhost${port}!`));
