import CurrentWeather from "../components/CurrentWeather";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import WeatherInfo from "../components/WeatherInfo";
import "./dashboard.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWeatherData, addForecastData } from "../reducers/weatherReducer.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.data);
  const forecastData = useSelector((state) => state.forecastData.data);

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [details, setDetails] = useState({});
  const API_KEY = "b65726c1fc5915f55e85a7a7264afaad"; // Assuming you're using Create React App

  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      dispatch(addWeatherData(weatherResponse.data));
      dispatch(addForecastData(forecastResponse.data.list));

      setWeather({
        city: weatherResponse.data.name,
        temperature: weatherResponse.data.main.temp,
        description: weatherResponse.data.weather[0].description,
        icon: weatherResponse.data.weather[0].icon,
        humidity: weatherResponse.data.main.humidity,
        windSpeed: weatherResponse.data.wind.speed,
      });

      const dailyForecasts = forecastResponse.data.list.filter((entry) =>
        entry.dt_txt.includes("12:00:00")
      );

      setForecast(
        dailyForecasts.map((entry) => ({
          date: entry.dt_txt.split(" ")[0],
          temperature: entry.main.temp,
          description: entry.weather[0].description,
          icon: entry.weather[0].icon,
        }))
      );

      setDetails({
        pressure: weatherResponse.data.main.pressure,
        humidity: weatherResponse.data.main.humidity,
        windSpeed: weatherResponse.data.wind.speed,
      });
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div className="main__container">
      <Header onSearch={fetchWeather} />
      <div className="detail__content">
        <div className="nav__content">
          <Navbar />
        </div>
        <div className="info__content">
          <WeatherInfo weather={weather} />
          {/* <CurrentWeather forecast={forecast} details={details} /> */}
        </div>
      </div>
      {/* <MainPage /> */}
    </div>
  );
};

export default Dashboard;
