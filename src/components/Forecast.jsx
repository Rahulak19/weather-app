import React from "react";
import "../../src/styles/Forecast.css";

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast">
      {forecast.map((day, index) => (
        <div key={index} className="weather-card">
          <h3>{day.date}</h3>
          <h4>{day.temperature}°C</h4>
          <img src={`./assets/icons/${day.icon}.png`} alt={day.description} />
          <p>{day.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
