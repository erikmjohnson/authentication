'use strict';

require('dotenv').config();


const PORT = process.env.PORT;
const MONGODB_URI= 'mongodb://localhost/testdb';

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(MONGODB_URI, options);

// Start the web server
require('./src/app.js').start(PORT);
