# 🌱 EcoGuide – Smart Carbon Footprint Tracker

EcoGuide is an intelligent web application that helps users **measure**, **monitor**, and **reduce** their environmental impact. Built with **React.js** and powered by a **machine learning backend (Flask + Random Forest Regressor)**, it provides accurate carbon footprint predictions based on user behavior.

![EcoGuide Banner](https://i.imgur.com/ekOt9zN.png) <!-- Replace with your actual banner if available -->

---

## 🚀 Features

- 🔍 **AI-powered Carbon Footprint Estimation**
- 📊 Real-time predictions based on:
  - Electricity Usage ⚡
  - Water Consumption 🚿
  - Transportation Distance 🚗
  - Waste Production 🗑️
- 📉 Scaled insights to guide eco-friendly decisions
- 🔐 Cross-Origin Access (CORS) enabled for seamless frontend-backend interaction
- 💻 Clean and responsive **React UI**

---

## 🧠 Tech Stack

| Frontend | Backend | Machine Learning | Deployment |
|----------|---------|------------------|------------|
| React.js | Flask (Python) | Random Forest Regressor | GitHub / Render / Vercel |
| JavaScript | Flask-CORS | scikit-learn, NumPy |  |
| HTML5/CSS3 | REST API | Joblib, Pandas |  |

---

## 📁 Project Structure

```bash
eco/
│
├── backend/
│   ├── app.py                   # Flask backend API
│   ├── train.py                 # ML model training script
│   ├── carbon_data.csv          # Dataset for training
│   ├── carbon_footprint_rf_model.pkl  # Saved ML model
│   ├── scaler.pkl               # StandardScaler for input normalization
│   └── environmental_model.pkl  # Optional: Extra ML model for future features
│
├── frontend/
│   ├── public/                  # Static HTML files
│   ├── src/
│   │   ├── components/          # React Components
│   │   ├── App.js               # Main React App
│   │   └── ...                  # Other JS and CSS files
│   └── package.json             # React dependencies
│
└── README.md                    # This file 😉
