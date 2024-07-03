import React from "react";
import "../../src/styles/CitySelector.css";

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = React.useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="city-selector">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CitySelector;
