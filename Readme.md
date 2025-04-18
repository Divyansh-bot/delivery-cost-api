Sure! Here's a **complete `README.md`** for your Delivery Cost Calculation API — with setup instructions, usage guide, and the verified test cases you just confirmed.

You can copy this directly into your GitHub repo.

---

```markdown
# 🚚 Delivery Cost Calculation API

A RESTful API built with Node.js and Express to calculate the **minimum delivery cost** for an order based on:
- Product availability across warehouse centers (C1, C2, C3)
- Vehicle running cost per weight category
- Distance between centers and customer location (L1)
- Optimized pickup and drop route by a single delivery vehicle

---

## 📦 Tech Stack

- Node.js
- Express.js
- REST API
- Deployed on Render

---

## 📁 Folder Structure

```
.
├── server.js
├── routes/
│   └── delivery.js
├── controllers/
│   └── deliveryController.js
├── services/
│   └── deliveryService.js
└── package.json
```

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/delivery-cost-api.git
cd delivery-cost-api
npm install
npm start
```

API will be running on:

```
http://localhost:3000
```

---

## 🌐 Deployed API

**Base URL:**  
`https://delivery-cost-api-jaha.onrender.com`

**POST Endpoint:**  
`https://delivery-cost-api-jaha.onrender.com/api/calculate-delivery-cost`

---

## 🛠️ API Usage

### 📬 Method:
`POST`

### 🔗 Endpoint:
`/api/calculate-delivery-cost`

### 🔧 Headers:
```
Content-Type: application/json
```

### 📥 Request Body Format:
```json
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
```

### 📤 Response:
```
325
```

---

## 🧪 Sample Test Cases

| # | Input                                                                                     | Expected Output |
|---|-------------------------------------------------------------------------------------------|-----------------|
| 1 | `{ "A": 1, "B": 1, "C": 1 }`                                                              | `40`            |
| 2 | `{ "A": 2, "B": 2 }`                                                                      | `40`            |
| 3 | `{ "A": 1, "E": 2 }`                                                                      | `160`           |
| 4 | `{ "A": 1, "B": 1, "C": 1, "D": 1, "E": 1, "F": 1, "G": 1, "H": 1, "I": 1 }`               | `260`           |
| 5 | `{ "A": 4, "B": 4, "C": 4, "D": 4, "E": 4, "F": 4, "G": 4, "H": 4, "I": 4 }`               | `390`           |

---

## 🧠 Assumptions

- Each product weighs **0.5 kg**
- Cost per km is:
  - Light (≤ 5kg): 4
  - Medium (≤ 10kg): 5
  - Heavy (> 10kg): 6
- Vehicle is deployed from any one center and can pick/drop from multiple centers
- Only one vehicle is used per delivery

---

## 📬 Contact

Feel free to reach out for any feedback or collaboration!  
📧 your-email@example.com

---

```

Would you like this as a downloadable `.md` file or zipped folder with everything ready for GitHub?