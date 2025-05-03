import React, { useState } from 'react';
import './App.css';

function App() {
  // States for input fields and result
  const [electricity, setElectricity] = useState('');
  const [water, setWater] = useState('');
  const [transport, setTransport] = useState('');
  const [waste, setWaste] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleElectricityChange = (e) => setElectricity(e.target.value);
  const handleWaterChange = (e) => setWater(e.target.value);
  const handleTransportChange = (e) => setTransport(e.target.value);
  const handleWasteChange = (e) => setWaste(e.target.value);

  // Handle calculation
  const handleCalculate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          electricity: parseFloat(electricity),
          water: parseFloat(water),
          transport: parseFloat(transport),
          waste: parseFloat(waste),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.carbon_footprint);
        setError(null);
      } else {
        setError(data.error);
        setResult(null);
      }
    } catch (err) {
      console.error("Error in calculation:", err); // Log error to console for debugging
      setError('Something went wrong. Please try again.');
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>EcoGuardian - Sustainability Calculator</h1>
      <form onSubmit={handleCalculate} className="form-container">
        <div className="input-group">
          <label htmlFor="electricity">Electricity Consumption (kWh):</label>
          <input
            type="number"
            id="electricity"
            value={electricity}
            onChange={handleElectricityChange}
            placeholder="Enter electricity consumption"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="water">Water Usage (liters):</label>
          <input
            type="number"
            id="water"
            value={water}
            onChange={handleWaterChange}
            placeholder="Enter water usage"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="transport">Transport Emissions (kg CO₂):</label>
          <input
            type="number"
            id="transport"
            value={transport}
            onChange={handleTransportChange}
            placeholder="Enter transport emissions"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="waste">Waste Production (kg):</label>
          <input
            type="number"
            id="waste"
            value={waste}
            onChange={handleWasteChange}
            placeholder="Enter waste production"
            required
          />
        </div>

        <button type="submit">Calculate</button>
      </form>

      {error && (
        <div className="error">
          <h2>{error}</h2>
        </div>
      )}

      {result !== null && (
        <div className="result">
          <h2>Total Environmental Impact: {result} units</h2>
        </div>
      )}
    </div>
  );
}

export default App;
