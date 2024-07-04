import React from "react";
import "../styles/currentWeather.scss";
import { useSelector } from "react-redux";
import RainyCloud from "../assets/icons/RainyCloud.svg";
import Drop from "../assets/icons/Drop.svg";
import DownArrow from "../assets/icons/DownArrow.svg";
import Wind from "../assets/icons/Wind.svg";

const CurrentWeather = () => {
  const weatherData = useSelector((state) => state.weatherData.data);

  if (
    !weatherData ||
    !weatherData.main ||
    !weatherData.weather ||
    weatherData.weather.length === 0
  ) {
    return <div>Loading...</div>;
  }

  const {
    name,
    main: { temp, humidity, pressure },
    weather,
    wind: { speed: windSpeed },
    dt,
  } = weatherData;
  const [{ description, icon }] = weather;

  const date = new Date(dt * 1000);
  const formattedDate = date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="current__weath">
      <div className="current__weather__main">
        <div className="weather__details">
          <div className="degree">{Math.round(temp)} °C</div>
          <div className="weather__condition">{description}</div>
          <div className="current_data">{formattedDate}</div>
        </div>
        <div className="weather__icon">
          <img
            className="weather__img"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
        </div>
      </div>
      <div className="curr_wind">
        <div className="wind__title">Wind</div>
        <div className="wind__details">
          <div className="wind__details__main">
            <div className="wind__speed">{Math.round(windSpeed)} KM/hr</div>
          </div>
          <div className="wind__icon">
            <img className="wind__img" src={Wind} alt="Wind" />
          </div>
        </div>
      </div>
      <div className="curr_wind">
        <div className="wind__title">Atm.pressure</div>
        <div className="wind__details">
          <div className="wind__details__main">
            <div className="wind__speed">{pressure}</div>
            <div className="air__spd">mmHg</div>
          </div>
          <div className="wind__icon">
            <img className="wind__img" src={DownArrow} alt="Down arrow" />
          </div>
        </div>
      </div>
      <div className="curr_wind">
        <div className="wind__title">Air humidity</div>
        <div className="wind__details">
          <div className="wind__details__main">
            <div className="wind__speed">{humidity}%</div>
          </div>
          <div className="wind__icon">
            <img className="wind__img" src={Drop} alt="Drop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
