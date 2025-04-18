const { calculateMinimumDeliveryCost } = require('../services/deliveryService');

exports.calculateDeliveryCost = (req, res) => {
  try {
    const order = req.body;
    
    // Validate input
    for (const product in order) {
      if (!['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].includes(product)) {
        return res.status(400).json({ error: `Invalid product: ${product}` });
      }
      
      if (typeof order[product] !== 'number' || order[product] < 0) {
        return res.status(400).json({ error: `Invalid quantity for product ${product}` });
      }
    }
    
    const cost = calculateMinimumDeliveryCost(order);
    
    return res.json(cost);
  } catch (error) {
    console.error('Error calculating delivery cost:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};