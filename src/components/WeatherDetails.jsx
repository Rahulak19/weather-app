import React from "react";
import "../../src/styles/WeatherDetails.css";

const WeatherDetails = ({ details }) => {
  return (
    <div className="weather-details">
      <p>Pressure: {details.pressure} mmHg</p>
      <p>Humidity: {details.humidity}%</p>
      <p>Wind Speed: {details.windSpeed} km/h</p>
    </div>
  );
};

export default WeatherDetails;
