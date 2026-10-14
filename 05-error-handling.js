/**
 * PROGRAM 5: Error Handling Middleware
 * Run: node 05-error-handling.js
 */
const express = require('express');
const app = express();

app.get('/working', (req, res) => {
  res.send('Everything is fine here!');
});

app.get('/trigger-error', (req, res, next) => {
  const err = new Error('Database failed to respond!');
  err.statusCode = 500;
  next(err); // Pass error to Express error handler
});

// Central Error Handler (4 parameters: err, req, res, next)
app.use((err, req, res, next) => {
  console.error('Caught error:', err.message);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message
  });
});

app.listen(3005, () => {
  console.log('Program 5 running on http://localhost:3005');
});
