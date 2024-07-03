import React from "react";
import "../../src/styles/currentWeather.scss";
import RainyCloud from "../assets/icons/RainyCloud.svg";
import Drop from "../assets/icons/Drop.svg";
import DownArrow from "../assets/icons/DownArrow.svg";
import Wind from "../assets/icons/Wind.svg";

const CurrentWeather = ({ weather }) => {
  return (
    <>
      <div className="current__weath">
        <div className="current__weather__main">
          <div className="weather__details">
            <div className="degree">+13 °C</div>
            <div className="weather__condition">Heavy Rain</div>
            <div className="current_data">July 3,12:00</div>
          </div>
          <div className="weather__icon">
            <img className="weather__img" src={RainyCloud} alt="Clouds" />
          </div>
        </div>
        <div className="curr_wind">
          <div className="wind__title">Wind</div>
          <div className="wind__details">
            <div className="wind__details__main">
              <div className="wind__speed">7KM/hr > SE</div>
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
              <div className="wind__speed">758</div>
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
              <div className="wind__speed">65%</div>
            </div>
            <div className="wind__icon">
              <img className="wind__img" src={Drop} alt="Drop" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
