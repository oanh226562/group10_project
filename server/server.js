// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/user');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health-check root
app.get('/', (req, res) => res.send('API is running'));

// Routes (prefix /api)
app.use('/api', userRouter);

// Start server
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
