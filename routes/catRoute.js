'use strict';
const express = require('express');
var router = express.Router();

router.route('/')
.get((req, res) => {
    console.log('get all cats');
    res.send('Hello cat!')
  })
  
.post((req, res) => {
  console.log('post cat');
  res.send('post cat');
  });
  

router.route('/:id')
    .get((req, res) => {
        console.log('get one cat by id' , req.params );
        res.send(`Hello cat with id ${req.params.id}!`)
      })
    .put((req, res) => {
    console.log('put cat' , req.params);
    res.send('put cat');
  })
    .delete((req, res) => {
      console.log('delete cat' , req.params);
      res.send('delete cat');
  });

module.exports = router;

// catRoute
