const express = require('express');
const app = express();
app.use(express.json());

// Import routes
const trainRoutes = require('./routes/trainRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/api', trainRoutes);
app.use('/api', bookingRoutes);
app.use('/api', userRoutes);

const server = app.listen(3000, () => {
    console.log(`Server is running at http://localhost:${3000}`);
  });