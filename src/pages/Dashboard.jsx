import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="main__container">
        <Navbar />
        <MainPage />
      </div>
    </>
  );
};

export default Dashboard;
