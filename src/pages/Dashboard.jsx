import CurrentWeather from "../components/CurrentWeather";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import WeatherInfo from "../components/WeatherInfo";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="main__container">
        <Header />
        <div className="detail__content">
          <div className="nav__content">
            <Navbar />
          </div>
          <div className="info__content">
            <WeatherInfo />
          </div>
        </div>

        {/* <Navbar />
        <MainPage /> */}
      </div>
    </>
  );
};

export default Dashboard;
