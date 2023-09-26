import React from "react";
import "./Top.css";
import WestIcon from "@mui/icons-material/West";

const Topsection = () => {
  return (
    <div>
      <div className="top_section">
        <div>
          <span className="arrow_left">
            <WestIcon />
          </span>
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
          <div className="today_month">
            <span style={{ fontWeight: "bolder" }}>Today</span>
            <span>Month</span>
            <span>All Times</span>
          </div>
          <span>
            <img
              style={{
                width: "40px",
                borderRadius: "20px",
                position: "absolute",
                top: "120px",
                left: "150px",
              }}
              src="imge123.jpg"
            />
          </span>
          <span>
            <img
              style={{
                width: "40px",
                borderRadius: "20px",
                position: "absolute",
                top: "160px",
                left: "40px",
              }}
              src="imge123.jpg"
            />
          </span>
          <span>
            <img
              style={{
                width: "40px",
                borderRadius: "20px",
                position: "absolute",
                top: "180px",
                left: "250px",
              }}
              src="imge123.jpg"
            />
          </span>
          <span
            style={{ fontWeight: "bolder" }}
            className="ellipse_arrow_first"
          >
            1
          </span>
          <span className="ellipse_arrow_second">2</span>
          <span className="ellipse_arrow_third">3</span>
        </div>
      </div>
    </div>
  );
};

export default Topsection;
