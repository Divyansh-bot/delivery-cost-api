const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const deliveryRoutes = require('./routes/delivery');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', deliveryRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Delivery Cost Calculation API - Use POST /api/calculate-delivery-cost');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});