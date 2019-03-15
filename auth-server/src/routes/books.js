'use strict';

const express = require('express');
const router = express.Router();

const validateUser = require('../auth/middleware');

router.get('/books', validateUser, handleGetAll);
router.get('/books/:id', validateUser, handleGetOne);



// Route Handlers
function handleGetAll(req, res, next) {
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;
