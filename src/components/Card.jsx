/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({ color, src, title, time, currentHrs, previousHrs }) => {
  return (
    <div className="card-wrapper">
      <div className="card-top" style={{ backgroundColor: color }}>
        <img src={src} alt="" />
      </div>
      <div className="card-info">
        <div className="card-activity">
          <h2>{title}</h2>
          <span>...</span>
        </div>
        <div className="card-hours">
          <h3>{currentHrs}hrs</h3>
          <p>
            Last {time} - {previousHrs}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
