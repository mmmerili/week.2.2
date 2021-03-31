'use strict';

const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: "mysql.metropolia.fi",
  user: "meriliru",
  password: "test2021",
  database: "meriliru",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;