// server/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'foreds',
  password: 'andy', // Replace with your pgAdmin password
  port: 5432,
});

module.exports = pool;
