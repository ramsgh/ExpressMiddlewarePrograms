/**
 * PROGRAM 2: Custom Logging Middleware
 * Run: node 02-custom-logging.js
 */
const express = require('express');
const app = express();

// Custom Middleware function
const myLogger = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(`[LOG] ${req.method} request to ${req.url} at ${req.requestTime}`);
  next(); // Passes control to the next handler
};

// Register custom middleware globally
app.use(myLogger);

app.get('/', (req, res) => {
  res.send(`Hello World! Request time was: ${req.requestTime}`);
});

app.listen(3002, () => {
  console.log('Program 2 running on http://localhost:3002');
});
