Delivery Cost Calculation API
A REST API that calculates the minimum cost to deliver an order from three warehouse centers to a customer location.

API Endpoint
POST /api/calculate-delivery-cost

Calculate the minimum cost to deliver an order.

Request Format
json
{
  "A": 1,
  "B": 2,
  "C": 1,
  "D": 5,
  "E": 1,
  "F": 1,
  "G": 2,
  "H": 1,
  "I": 1
}
Response Format
json
86
Test Cases
Order {"A": 1, "G": 1, "H": 1, "I": 3} → Output: 86
Order {"A": 1, "B": 1, "C": 1, "G": 1, "H": 1, "I": 1} → Output: 118
Order {"A": 1, "B": 1, "C": 1} → Output: 78
Order {"A": 1, "B": 1, "C": 1, "D": 1} → Output: 168
