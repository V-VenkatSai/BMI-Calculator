import React, { useState } from "react";
import './App.css';

const App = () => {
  const [weight, setWeight] = useState("40");
  const [height, setHeight] = useState("120");

  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleHeight = (event) => {
    setHeight(event.target.value);
  };

  const output = () => {
    const convertHeight = height / 100;
    return (weight / (convertHeight * convertHeight)).toFixed(1);
  };

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="input">
          <div className="weight-input">
          <p>Your Weight: {weight}kg</p>
          <input
            className="input-slider"
            type="range"
            name="weight"
            onChange={handleWeight}
            min={20}
            max={250}
            step={1}
          />
          </div>
          <div className="height-input">
          <p>Your Height: {height}cm</p>
          <input
            className="input-slider"
            type="range"
            name="height"
            onChange={handleHeight}
            min={40}
            max={250}
          />
          </div>
        </div>
        <div className="output">
          <p>Your BMI is:</p>
          <p className="output-text"> {output()}</p>
        </div>
      </div>
      <div className="categories">
          <ul>
            <li>{"Underweight = <18.5"}</li>
            <li>{"Normal weight = 18.5–24.9"}</li>
            <li>{"Overweight = 25–29.9"}</li>
            <li>{"Obesity = BMI of 30 or greater"}</li>
          </ul>
        </div>
    </main>
  );
};

export default App;
