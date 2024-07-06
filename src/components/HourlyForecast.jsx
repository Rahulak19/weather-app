import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Necessary for Chart.js 3.x
import "../styles/hourlyForecast.scss";
import { useSelector } from "react-redux";

const HourlyForecast = ({ city }) => {
  //const [forecastData, setForecastData] = useState([]);
  const API_KEY = "b65726c1fc5915f55e85a7a7264afaad";

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  //         );
  //         setForecastData(response.data.list);
  //       } catch (error) {
  //         console.error("Error fetching weather data:", error);
  //       }
  //     };
  //     fetchData();
  //   }, [city]);

  const forecastData = useSelector((state) => state.forecastData.data);
  const hourlyData = forecastData.slice(0, 8).map((entry) => ({
    time: new Date(entry.dt_txt).getHours(),
    temperature: entry.main.temp,
    rain: entry.rain ? entry.rain["3h"] : 0,
    windSpeed: entry.wind.speed,
    description: entry.weather[0].description,
  }));

  const chartData = {
    labels: hourlyData.map((data) => `${data.time}:00`),
    datasets: [
      {
        label: "Temperature (°C)",
        data: hourlyData.map((data) => data.temperature),
        borderColor: "rgba(173, 216, 230, 1)",
        backgroundColor: "red",
        borderWidth: 2,
        yAxisID: "y1",
        fill: false,
      },
      {
        label: "Rain (mm/h)",
        data: hourlyData.map((data) => data.rain),
        backgroundColor: "rgba(173, 216, 230, 0.5)", // Change bar color to thick ice blue
        borderColor: "rgba(173, 216, 230, 1)", // Optional: outline color of the bars
        borderWidth: 1, // Optional: border thickness of the bars
        yAxisID: "y2",
        type: "bar", // Change to bar type
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y1: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Temperature (°C)",
          color: "white", // Optional: color of the y-axis label
        },
        ticks: {
          color: "white", // Optional: color of the y-axis ticks
        },
      },
      y2: {
        type: "linear",
        position: "right",
        title: {
          display: true,
          text: "Rain (mm/h)",
          color: "white", // Optional: color of the y-axis label
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: "white", // Optional: color of the y-axis ticks
        },
      },
      x: {
        ticks: {
          color: "white", // Optional: color of the x-axis ticks
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // Optional: color of the legend labels
        },
      },
    },
  };

  return (
    <div className="hourly-forecast">
      <div className="hour__title">Hourly Forecast</div>
      <div className="chart-container">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="weather-details">
        {hourlyData.map((data, index) => (
          <div key={index} className="weather-detail">
            {/* <div className="time">{`${data.time}:00`}</div>
            <div className="description">{data.description}</div>
            <div className="wind-speed">{`Wind: ${data.windSpeed} m/s`}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
