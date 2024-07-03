import "../styles/weatherForecast.scss";
import RainyCloud from "../assets/icons/RainyCloud.svg";
const WeatherForecast = () => {
  return (
    <>
      <div className="weather__details__forecast">
        <div className="weather__forecast__main">
          <div className="wea__title">Weather Forecast</div>
          <div className="weather__timeline">
            <div className="weather__period">
              <div className="weather__period__list">
                <div>Hourly</div>
                <div>For 5 days</div>
                <div>For a month</div>
              </div>
            </div>
            <div className="weather__data__li">
              <div className="weather__data">
                <div className="weather__fo__time">
                  <div className="fo__curr__day">Monday</div>
                  <div className="fo__curr__time">3 July</div>
                </div>
                <div className="weather__fo__degree">+13 °C</div>
                <div className="weather__fo__icon">
                  {" "}
                  <img
                    className="weather__fo__img"
                    src={RainyCloud}
                    alt="Clouds"
                  />
                </div>
              </div>
              <div className="weather__data">
                <div className="weather__fo__time">
                  <div className="fo__curr__day">Monday</div>
                  <div className="fo__curr__time">3 July</div>
                </div>
                <div className="weather__fo__degree">+13 °C</div>
                <div className="weather__fo__icon">
                  {" "}
                  <img
                    className="weather__fo__img"
                    src={RainyCloud}
                    alt="Clouds"
                  />
                </div>
              </div>
              <div className="weather__data">
                <div className="weather__fo__time">
                  <div className="fo__curr__day">Monday</div>
                  <div className="fo__curr__time">3 July</div>
                </div>
                <div className="weather__fo__degree">+13 °C</div>
                <div className="weather__fo__icon">
                  {" "}
                  <img
                    className="weather__fo__img"
                    src={RainyCloud}
                    alt="Clouds"
                  />
                </div>
              </div>
              <div className="weather__data">
                <div className="weather__fo__time">
                  <div className="fo__curr__day">Monday</div>
                  <div className="fo__curr__time">3 July</div>
                </div>
                <div className="weather__fo__degree">+13 °C</div>
                <div className="weather__fo__icon">
                  {" "}
                  <img
                    className="weather__fo__img"
                    src={RainyCloud}
                    alt="Clouds"
                  />
                </div>
              </div>
              <div className="weather__data">
                <div className="weather__fo__time">
                  <div className="fo__curr__day">Monday</div>
                  <div className="fo__curr__time">3 July</div>
                </div>
                <div className="weather__fo__degree">+13 °C</div>
                <div className="weather__fo__icon">
                  {" "}
                  <img
                    className="weather__fo__img"
                    src={RainyCloud}
                    alt="Clouds"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherForecast;
