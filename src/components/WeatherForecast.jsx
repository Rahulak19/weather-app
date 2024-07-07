import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/weatherForecast.scss";
import RainyCloud from "../assets/icons/RainyCloud.svg";

const WeatherForecast = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("hourly");
  const forecastData = useSelector((state) => state.forecastData.data);

  const renderForecast = (data) => {
    return data.slice(0, 5).map((forecast, index) => {
      const date = new Date(forecast.dt_txt);
      const time = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const day = date.toLocaleDateString("en-US", { weekday: "long" });
      const fullDate = date.toLocaleDateString("en-US");

      return (
        <div key={index} className="weather__data">
          <div className="weather__fo__time">
            {selectedPeriod === "hourly" ? (
              <div className="fo__curr__time">{time}</div>
            ) : (
              <>
                <div className="day__time__fo">
                  <div className="fo__curr__day">{day}</div>
                  <div className="fo__curr__time">{fullDate}</div>
                </div>
              </>
            )}
          </div>
          <div className="weather__fo__degree">
            {Math.round(forecast.main.temp)} °C
          </div>
          <div className="weather__fo__icon">
            {/* <img
              className="weather__fo__img"
              src={RainyCloud} // Ideally, map the correct icon based on forecast.weather[0].icon
              alt={forecast.weather[0].description}
            /> */}
            <img
              className="weather__fo__img"
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
            />
          </div>
        </div>
      );
    });
  };

  const getFilteredData = () => {
    if (selectedPeriod === "hourly") {
      return forecastData.slice(0, 8); // Show first 8 entries for hourly (example: first 8 hours)
    } else if (selectedPeriod === "5days") {
      return forecastData.filter((entry) => entry.dt_txt.includes("12:00:00")); // Filter entries for 5 days
    } else if (selectedPeriod === "monthly") {
      return forecastData; // Show all data for monthly
    }
  };

  const filteredData = getFilteredData();

  return (
    <div className="weather__details__forecast">
      <div className="wea__title">Weather Forecast</div>
      <div className="weather__forecast__main">
        <div className="weather__timeline">
          <div className="weather__period">
            <div className="weather__period__list">
              <div
                onClick={() => setSelectedPeriod("hourly")}
                className={selectedPeriod === "hourly" ? "active" : ""}
              >
                Hourly
              </div>
              <div
                onClick={() => setSelectedPeriod("5days")}
                className={selectedPeriod === "5days" ? "active" : ""}
              >
                For 5 days
              </div>
              {/* <div
                onClick={() => setSelectedPeriod("monthly")}
                className={selectedPeriod === "monthly" ? "active" : ""}
              >
                For a month
              </div> */}
            </div>
          </div>
          <div className="weather__data__li">
            {renderForecast(filteredData)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
