import "../../src/styles/header.scss";
import MapLocation from "../assets/icons/MapLocation.svg";
import Search from "../assets/icons/Search.svg";
import Bell from "../assets/icons/Bell.svg";
import Profile from "../assets/icons/Profile.svg";
import { useState } from "react";
const Header = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const handleSearch = () => {
    onSearch(city);
  };
  return (
    <>
      <div className="header__main__component">
        <div className="header__left">
          <div className="header__title">Weather Today</div>
          <div className="current__location">
            <img className="location__img" src={MapLocation} alt="Map" />
            <div className="location__name">Chennai</div>
          </div>
          <div className="search__div">
            <input
              placeholder="Enter the name of the city"
              className="search__div__text"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <img
              onClick={handleSearch}
              className="location__img"
              src={Search}
              alt="Search"
            />
          </div>
        </div>
        <div className="header__right">
          <div className="bell__icon">
            <img className="location__img" src={Bell} alt="Bell" />
          </div>
          <div className="profile__icon">
            <img className="location__img" src={Profile} alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
