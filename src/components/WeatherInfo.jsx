import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import "../styles/weatherInfo.scss";
const WeatherInfo = ({ weather }) => {
  return (
    <>
      <div className="weather__info__main">
        <div className="weather__info__current">
          <CurrentWeather />
        </div>
        <div className="weather__forecast__main">
          <WeatherForecast />
        </div>
      </div>
    </>
  );
};

export default WeatherInfo;
