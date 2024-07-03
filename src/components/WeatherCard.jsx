import React from "react";

const WeatherCard = ({ day, temp, icon, description }) => {
  return (
    <div className="weather-card">
      <h3>{day}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <h4>{temp}°C</h4>
      <p>{description}</p>
    </div>
  );
};

export default WeatherCard;
