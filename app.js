const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// setting up the db
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ferrarif12',
  database: 'storesdb',
});
db.connect();
// simple route
app.get('/stores', (req, res) => {
  const sql = 'SELECT * FROM stores';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// set port, listen for requests
app.listen(5000, () => {
  console.log('Server is running on port 5000.');
});
