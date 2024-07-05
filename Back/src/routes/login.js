const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

  db.get(query, [username, password], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (row) {
      res.status(200).json({ message: 'Login successful', user: row });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

module.exports = router;
