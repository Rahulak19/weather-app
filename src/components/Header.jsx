// import "../../src/styles/header.scss";
// import MapLocation from "../assets/icons/MapLocation.svg";
// import Search from "../assets/icons/Search.svg";
// import Bell from "../assets/icons/Bell.svg";
// import Profile from "../assets/icons/Profile.svg";
// import { useState } from "react";
// const Header = ({ currCity, onSearch }) => {
//   const [city, setCity] = useState("");
//   const handleSearch = () => {
//     onSearch(city);
//   };
//   function capitalizeFirstLetter(inputString) {
//     // Ensure inputString is not empty
//     if (!inputString) return "";

//     // Convert the first character to uppercase and the rest to lowercase
//     return (
//       inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
//     );
//   }
//   return (
//     <>
//       <div className="header__main__component">
//         <div className="header__left">
//           <div className="header__title">Weather Today</div>
//           <div className="current__location">
//             <img className="location__img" src={MapLocation} alt="Map" />
//             <div className="location__name">
//               {capitalizeFirstLetter(currCity)}
//             </div>
//           </div>
//           <div className="search__div">
//             <input
//               placeholder="Enter the name of the city"
//               className="search__div__text"
//               type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleSearch();
//                 }
//               }}
//             />
//             <img
//               onClick={handleSearch}
//               className="location__img"
//               src={Search}
//               alt="Search"
//             />
//           </div>
//         </div>
//         {/* <div className="header__right">
//           <div className="bell__icon">
//             <img className="location__img" src={Bell} alt="Bell" />
//           </div>
//           <div className="profile__icon">
//             <img className="location__img" src={Profile} alt="Profile" />
//           </div>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Header;

// import "../../src/styles/header.scss";
// import MapLocation from "../assets/icons/MapLocation.svg";
// import Search from "../assets/icons/Search.svg";
// import Bell from "../assets/icons/Bell.svg";
// import Profile from "../assets/icons/Profile.svg";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const Header = ({ currCity, onSearch }) => {
//   const [city, setCity] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [suggestionsOpen, setSuggestionsOpen] = useState(false);

//   const handleSearch = (suggestion) => {
//     onSearch(suggestion);
//   };

//   const fetchCitySuggestions = async (query) => {
//     if (!query) {
//       setSuggestions([]);
//       return;
//     }
//     try {
//       const response = await axios.get(
//         `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
//         {
//           params: { namePrefix: query },
//           headers: {
//             "X-RapidAPI-Key":
//               "69f0c33ed5mshe9142ed1829f0fap11ab04jsn24dec7bcb087",
//             "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//           },
//         }
//       );
//       setSuggestionsOpen(true);
//       setSuggestions(response.data.data.map((city) => city.city));
//     } catch (error) {
//       console.error("Error fetching city suggestions:", error);
//       setSuggestions([]);
//     }
//   };

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       fetchCitySuggestions(city);
//     }, 300);

//     return () => clearTimeout(delayDebounceFn);
//   }, [city]);

//   function capitalizeFirstLetter(inputString) {
//     if (!inputString) return "";
//     return (
//       inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
//     );
//   }

//   return (
//     <>
//       <div className="header__main__component">
//         <div className="header__left">
//           <div className="header__title">Weather Today</div>
//           <div className="current__location">
//             <img className="location__img" src={MapLocation} alt="Map" />
//             <div className="location__name">
//               {capitalizeFirstLetter(currCity)}
//             </div>
//           </div>
//           <div className="search__div">
//             <input
//               placeholder="Enter the name of the city"
//               className="search__div__text"
//               type="text"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleSearch();
//                 }
//               }}
//             />
//             <img
//               onClick={handleSearch}
//               className="location__img"
//               src={Search}
//               alt="Search"
//             />
//             {suggestionsOpen && suggestions.length > 0 && (
//               <ul className="suggestions__list">
//                 {suggestions.map((suggestion, index) => (
//                   <li
//                     key={index}
//                     onClick={() => {
//                       setCity(suggestion);
//                       handleSearch(suggestion);
//                       setSuggestionsOpen(false);
//                     }}
//                   >
//                     {suggestion}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import "../../src/styles/header.scss";
import MapLocation from "../assets/icons/MapLocation.svg";
import Search from "../assets/icons/Search.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = ({ currCity, onSearch }) => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const handleSearch = (searchCity) => {
    onSearch(searchCity);
    setSuggestionsOpen(false);
  };

  const fetchCitySuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
        {
          params: { namePrefix: query },
          headers: {
            "X-RapidAPI-Key":
              "69f0c33ed5mshe9142ed1829f0fap11ab04jsn24dec7bcb087",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );
      setSuggestionsOpen(true);
      setSuggestions(response.data.data.map((city) => city.city));
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    if (!suggestionsOpen) return;

    const delayDebounceFn = setTimeout(() => {
      fetchCitySuggestions(city);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [city, suggestionsOpen]);

  function capitalizeFirstLetter(inputString) {
    if (!inputString) return "";
    return (
      inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
    );
  }

  return (
    <>
      <div className="header__main__component">
        <div className="header__left">
          <div className="header__title">Weather Today</div>
          <div className="current__location">
            <img className="location__img" src={MapLocation} alt="Map" />
            <div className="location__name">
              {capitalizeFirstLetter(currCity)}
            </div>
          </div>
          <div className="search__div">
            <input
              placeholder="Enter the name of the city"
              className="search__div__text"
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setSuggestionsOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(city);
                }
              }}
            />
            <img
              onClick={() => handleSearch(city)}
              className="location__img"
              src={Search}
              alt="Search"
            />
            {suggestionsOpen && suggestions.length > 0 && (
              <ul className="suggestions__list">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setCity(suggestion);
                      handleSearch(suggestion);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
