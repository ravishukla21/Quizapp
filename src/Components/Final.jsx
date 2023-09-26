import React from "react";
import "./Final.css";
import WestIcon from "@mui/icons-material/West";
import RocketIcon from "@mui/icons-material/Rocket";
import HistoryIcon from "@mui/icons-material/History";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
const topshow = [
  { name: "Space", icon: <RocketIcon /> },
  { name: "History", icon: <HistoryIcon /> },
  { name: "Sports", icon: <SportsCricketIcon /> },
  { name: "Space", icon: <RocketIcon /> },
  { name: "History", icon: <HistoryIcon /> },
  { name: "Sports", icon: <SportsCricketIcon /> },
  { name: "Space", icon: <RocketIcon /> },
  { name: "History", icon: <HistoryIcon /> },
  { name: "Sports", icon: <SportsCricketIcon /> },
];
const bottomshow = [
  { name: "Space", icon: <RocketIcon /> },
  { name: "History", icon: <HistoryIcon /> },
  { name: "Sports", icon: <SportsCricketIcon /> },
];
const Final = () => {
  return (
    <div className="container_final">
      <div className="top_section">
        <div>
          <span className="arrow_left">
            <WestIcon />
          </span>
          <span className="arrow_name">Hello Admin</span>
          <span className="arrow_right">
            <img
              style={{ width: "40px", borderRadius: "20px" }}
              src="imge123.jpg"
            />
          </span>
          <span className="ellipse_arrow"></span>
          <span className="ellipse_arrow1"></span>
          <span className="ellipse_arrow2"></span>
          <span className="ellipse_arrow3"></span>
        </div>
      </div>

      <div className="middle_section_final">
        <div
          style={{
            position: "relative",
            right: "90px",
            fontSize: "12px",
            fontWeight: "bolder",
          }}
        >
          Popular
        </div>
        <div className="middle_section_final_boxes">
          {bottomshow.map((el) => (
            <div>
              {el.icon}
              <div>{el.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="final_bottom_section">
        <div className="final_bottom_section_top">
          <span>Explore</span>
          <span>View All</span>
        </div>

        <div className="grid_final">
          {topshow.map((el) => (
            <div>
              <div>{el.icon}</div>
              <div>{el.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Final;
