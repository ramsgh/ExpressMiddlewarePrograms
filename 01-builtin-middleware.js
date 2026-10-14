/**
 * PROGRAM 1: Built-in Middleware (express.json & express.static)
 * Run: node 01-builtin-middleware.js
 */
const express = require('express');
const path = require('path');
const app = express();

// Built-in middleware to parse JSON bodies
app.use(express.json());

// Built-in middleware to serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/data', (req, res) => {
  console.log('Parsed req.body:', req.body);
  res.json({ message: 'Data received successfully!', data: req.body });
});

app.listen(3001, () => {
  console.log('Program 1 running on http://localhost:3001');
});
