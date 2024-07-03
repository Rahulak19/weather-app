import React, { useState } from "react";
import axios from "axios";
import CitySelector from "./components/CitySelector";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Sidebar from "./components/Sidebar";
import WeatherDetails from "./components/WeatherDetails";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

const API_KEY = "b65726c1fc5915f55e85a7a7264afaad";

const App = () => {
  // const [weather, setWeather] = useState(null);
  // const [forecast, setForecast] = useState([]);
  // const [details, setDetails] = useState({});

  // const fetchWeather = async (city) => {
  //   try {
  //     const weatherResponse = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  //     );
  //     const forecastResponse = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  //     );

  //     setWeather({
  //       city: weatherResponse.data.name,
  //       temperature: weatherResponse.data.main.temp,
  //       description: weatherResponse.data.weather[0].description,
  //       icon: weatherResponse.data.weather[0].icon,
  //       humidity: weatherResponse.data.main.humidity,
  //       windSpeed: weatherResponse.data.wind.speed,
  //     });

  //     const dailyForecasts = forecastResponse.data.list.filter((entry) =>
  //       entry.dt_txt.includes("12:00:00")
  //     );

  //     setForecast(
  //       dailyForecasts.map((entry) => ({
  //         date: entry.dt_txt.split(" ")[0],
  //         temperature: entry.main.temp,
  //         description: entry.weather[0].description,
  //         icon: entry.weather[0].icon,
  //       }))
  //     );

  //     setDetails({
  //       pressure: weatherResponse.data.main.pressure,
  //       humidity: weatherResponse.data.main.humidity,
  //       windSpeed: weatherResponse.data.wind.speed,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching weather data", error);
  //   }
  // };

  return (
    <div className="App">
      {/* <Sidebar />
      <div className="main-content">
        <CitySelector onSearch={fetchWeather} />
        {weather && <CurrentWeather weather={weather} />}
        {forecast.length > 0 && <Forecast forecast={forecast} />}
        {details && <WeatherDetails details={details} />}
      </div> */}

      <Dashboard />
    </div>
  );
};

export default App;
