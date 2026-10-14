/**
 * PROGRAM 4: Third-Party Middleware (cors, morgan, helmet)
 * Run: node 04-third-party-middleware.js
 */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet()); // Security headers
app.use(cors());   // Cross-Origin access
app.use(morgan('dev')); // Terminal logger

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', security: 'Helmet Enabled', cors: 'CORS Enabled' });
});

app.listen(3004, () => {
  console.log('Program 4 running on http://localhost:3004');
});
