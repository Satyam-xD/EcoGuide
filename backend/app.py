from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load('carbon_footprint_rf_model.pkl')
scaler = joblib.load('scaler.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        electricity = float(data['electricity'])
        water = float(data['water'])
        transport = float(data['transport'])
        waste = float(data['waste'])

        input_data = np.array([[electricity, water, transport, waste]])
        scaled_data = scaler.transform(input_data)
        prediction = model.predict(scaled_data)

        return jsonify({'carbon_footprint': round(prediction[0], 2)})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
