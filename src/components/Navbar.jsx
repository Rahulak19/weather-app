import "../styles/navbar.scss";
const Navbar = () => {
  return (
    <>
      <div className="navbar__main">
        <div className="nav__list">
          <ul>
            <li>Weather</li>
            {/* <li>News</li>
            <li>Map</li> */}
            <li>Settings</li>
            {/* <li>Log out</li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
