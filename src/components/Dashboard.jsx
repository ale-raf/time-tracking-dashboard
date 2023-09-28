/* eslint-disable react/prop-types */
import profile from "../assets/images/image-jeremy.png";
import "./Dashboard.css";

const Dashboard = ({ onClick }) => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-profile">
        <img src={profile} alt="" />
        <div>
          <p>Report for</p>
          <h2>Jeremy Robson</h2>
        </div>
      </div>
      <ul className="dashboard-time">
        <li onClick={onClick}>Daily</li>
        <li onClick={onClick}>Weekly</li>
        <li onClick={onClick}>Monthly</li>
      </ul>
    </div>
  );
};

export default Dashboard;
