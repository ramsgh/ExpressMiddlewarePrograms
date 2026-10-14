/**
 * PROGRAM 3: Custom Authentication Guard Middleware
 * Run: node 03-custom-auth.js
 */
const express = require('express');
const app = express();

// Custom Auth Check Middleware
const authCheck = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === 'secret123') {
    next(); // Access granted!
  } else {
    res.status(401).json({ error: 'Unauthorized! Pass Header x-api-key: secret123' });
  }
};

app.get('/public', (req, res) => {
  res.send('Public route - anyone can see this!');
});

// Guarded route using authCheck
app.get('/protected', authCheck, (req, res) => {
  res.json({ message: 'Welcome to the protected secret data!' });
});

app.listen(3003, () => {
  console.log('Program 3 running on http://localhost:3003');
});
