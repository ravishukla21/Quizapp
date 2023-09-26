import React from "react";
import "./Home.css";
import WestIcon from "@mui/icons-material/West";
import RemoveRoadIcon from "@mui/icons-material/RemoveRoad";
const options = [
  { name: "come" },
  { name: "comes" },
  { name: "are coming" },
  { name: "came" },
];
const Home = () => {
  return (
    <div className="container">
      <div className="top_section">
        <div>
          <span className="arrow_left">
            <WestIcon />
          </span>
          <span className="arrow_right">
            <RemoveRoadIcon />
          </span>
          <span className="ellipse_arrow"></span>
          <span className="ellipse_arrow1"></span>
          <span className="ellipse_arrow2"></span>
          <span className="ellipse_arrow3"></span>
        </div>
      </div>
      <div className="middle_section">
        <div id="time"></div>
        <div className="time_left">05 -</div>
        <div className="time_right">07 -</div>
        <div className="middle_white_question_no">Question 13/20</div>
        <div className="middle_white_question">
          How many students in your class from Korea?
        </div>
      </div>
      <div className="bottom_section">
        <div>
          <form>
            {options.map((el, index) => (
              <div className="bottom_section_option">
                <label>
                  <span className="name_one"> {el.name}</span>

                  <span className="mark_one">
                    <input type="checkbox" />
                  </span>
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
