'use strict';
const express = require('express');
const router = express.Router();
const catController = require('../models/controllers/catController');

router.route('/')
.get(catController.cat_list_get)
  
.post((req, res) => {
  console.log('post cat');
  res.send('post cat');
  });
  

router.route('/:id')
    .get(catController.cat_get_by_id)
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
