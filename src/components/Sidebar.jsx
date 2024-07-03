import React from "react";
import "../../src/styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Weather</li>
        <li>News</li>
        <li>Map</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
