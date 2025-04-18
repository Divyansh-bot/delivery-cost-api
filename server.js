const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const deliveryRoutes = require('./routes/delivery');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', deliveryRoutes);

app.get('/', (req, res) => {
  res.send('Delivery Cost Calculation API - Use POST /api/calculate-delivery-cost');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});