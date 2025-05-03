# 🌱 EcoGuide – Your Smart Carbon Footprint Tracker

EcoGuide is an intelligent web application that helps users **measure**, **monitor**, and **reduce** their environmental impact. Built with **React.js** and powered by a **machine learning backend (Flask + Random Forest Regressor)**, it provides accurate carbon footprint predictions based on user behavior.


---

## 🚀 Features

- 🔍 **AI-powered Carbon Footprint Estimation**
- 📊 Real-time predictions based on:
  - ⚡ Electricity Usage  
  - 🚿 Water Consumption  
  - 🚗 Transportation Distance  
  - 🗑️ Waste Production  
- 💡 Scaled insights to guide eco-friendly decisions
- 🔐 Cross-Origin Access (CORS) enabled for frontend-backend communication
- 💻 Clean and responsive **React UI**

---

## 🧠 Tech Stack

| Frontend     | Backend       | Machine Learning            | Deployment       |
|--------------|---------------|-----------------------------|------------------|
| React.js     | Flask (Python)| scikit-learn, pandas, joblib| Vercel / Render  |
| JavaScript   | Flask-CORS    | Random Forest Regressor     | GitHub           |
| HTML5 / CSS3 | REST API      | Standard Scaler             |                  |

---

## 📁 Project Structure

```
eco/
│
├── backend/
│   ├── app.py                        # Flask API (predict endpoint)
│   ├── train.py                      # ML model training script
│   ├── carbon_data.csv               # Dataset for training
│   ├── carbon_footprint_rf_model.pkl# Trained model
│   ├── scaler.pkl                    # Scaler for input normalization
│   └── requirements.txt              # Backend dependencies
│
├── frontend/
│   ├── public/                       # HTML base
│   ├── src/
│   │   ├── components/               # React components
│   │   ├── App.js                    # Main React component
│   │   ├── index.js                  # Entry point
│   │   └── styles.css                # Custom styles (optional)
│   ├── package.json                  # Frontend dependencies
│
└── README.md                         # This file
```

---

## 🔧 Installation Guide

### 🛠 Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate       # Use `source venv/bin/activate` on Mac/Linux
pip install -r requirements.txt
python train.py             # Train & save the ML model
python app.py               # Run the Flask server
```

> Make sure `carbon_data.csv` is present in the backend folder before running `train.py`.

---

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm start
```

> This will start your React development server at `http://localhost:3000`

---

## 🔮 API Endpoint

**POST** `/predict`

### Request Body (JSON)

```json
{
  "electricity": 350,
  "water": 120,
  "transport": 30,
  "waste": 10
}
```

### Response (JSON)

```json
{
  "carbon_footprint": 2.56
}
```

---

## 🧠 Machine Learning Info

- **Model:** RandomForestRegressor  
- **Scaled Input:** StandardScaler  
- **Trained on:** `carbon_data.csv`  
- **Target:** `carbon_footprint`

---

## 🔮 Future Enhancements

- 🧠 ML-powered eco-tips for reducing impact  
- 📈 Historical trend visualization  
- 🌿 Eco challenges and achievements  
- 📍 Geo-based local pollution metrics  
- 🧾 User authentication and profile tracking  

---

## 🤝 Contributing

1. Fork this repository  
2. Create your branch: `git checkout -b feature-name`  
3. Commit your changes: `git commit -m 'Add some feature'`  
4. Push to the branch: `git push origin feature-name`  
5. Submit a pull request

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use and modify.

---

## 🌍 Let’s Build a Greener Future!

> “The Earth is what we all have in common.” – Wendell Berry  
> Together, we can make smarter environmental choices — one step at a time. 💚
