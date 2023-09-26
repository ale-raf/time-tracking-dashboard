import "./App.css";
import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
import datas from "./data.json";
import exercise from "../src/assets/images/icon-exercise.svg";
import play from "../src/assets/images/icon-play.svg";
import selfcare from "../src/assets/images/icon-self-care.svg";
import social from "../src/assets/images/icon-social.svg";
import study from "../src/assets/images/icon-study.svg";
import work from "../src/assets/images/icon-work.svg";
import { useState } from "react";

function App() {
  const colors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)",
  ];

  const images = [work, play, study, exercise, social, selfcare];

  const [state, setState] = useState("weekly");

  const handleClick = (e) => {
    setState(e.target.innerText.toLowerCase());
  };

  const updateCurrentHours = (state, data) => {
    if (state === "daily") {
      return data.timeframes.daily.current;
    } else if (state === "weekly") {
      return data.timeframes.weekly.current;
    } else if (state === "monthly") {
      return data.timeframes.monthly.current;
    }
  };

  const updatePreviousHours = (state, data) => {
    if (state === "daily") {
      return data.timeframes.daily.previous;
    } else if (state === "weekly") {
      return data.timeframes.weekly.previous;
    } else if (state === "monthly") {
      return data.timeframes.monthly.previous;
    }
  };

  const updateTimeReference = (state) => {
    if (state === "daily") {
      return "day";
    } else if (state === "weekly") {
      return "week";
    } else if (state === "monthly") {
      return "month";
    }
  };

  return (
    <main className="app-container">
      <Dashboard onClick={handleClick} />
      <div className="card-container">
        {datas.map((data, index) => (
          <Card
            key={data.title}
            color={colors[index]}
            src={images[index]}
            title={data.title}
            time={updateTimeReference(state)}
            currentHrs={updateCurrentHours(state, data)}
            previousHrs={updatePreviousHours(state, data)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
