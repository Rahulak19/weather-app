// Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addWeatherData, addForecastData } from "../reducers/weatherReducer";
import CurrentWeather from "../components/CurrentWeather";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WeatherInfo from "../components/WeatherInfo";
import "./dashboard.scss";

const Dashboard = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.data);
  const forecastData = useSelector((state) => state.forecastData.data);

  const [city, setCity] = useState("Chennai");
  const API_KEY = "b65726c1fc5915f55e85a7a7264afaad";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );

        dispatch(addWeatherData(weatherResponse.data));
        dispatch(addForecastData(forecastResponse.data.list));
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, [city, dispatch, API_KEY]);

  return (
    <div className="main__container">
      <Header currCity={city} onSearch={(newCity) => setCity(newCity)} />
      <div className="detail__content">
        <div className="nav__content">
          <Navbar />
        </div>
        <div className="info__content">
          <WeatherInfo weather={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
