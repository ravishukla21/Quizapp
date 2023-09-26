import React from "react";
import WestIcon from "@mui/icons-material/West";
import RemoveRoadIcon from "@mui/icons-material/RemoveRoad";
import "./Score.css";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import HomeIcon from "@mui/icons-material/Home";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ScoreIcon from "@mui/icons-material/Score";
import ReplayIcon from "@mui/icons-material/Replay";
import VisibilityIcon from "@mui/icons-material/Visibility";
const shows = [
  { name: "Play Again", url: <ReplayIcon /> },
  { name: "Review Answers", url: <VisibilityIcon /> },
  { name: "Share Score", url: <ScoreIcon /> },
  { name: "Genrate PDF", url: <PictureAsPdfIcon /> },
  { name: "Home", url: <HomeIcon /> },
  { name: "Leaderboard", url: <LeaderboardIcon /> },
];
const stats = [
  { top: "100%", name: "Completion", color: "yellow" },
  { top: 20, name: "Total Question", color: "yellow" },
  { top: 13, name: "Correct", color: "green" },
  { top: 7, name: "Wrong", color: "red" },
];
const Score = () => {
  return (
    <div className="container3">
      <div className="top_section1">
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
      <div className="middle_middle">
        <div className="middle_section_five1">
          {stats.map((el, index) => (
            <div>
              <div style={{ color: el.color }}>{el.top}</div>
              <div>{el.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom_bottom">
        <div className="bottom_section_container3">
          {shows.map((el, ind) => (
            <div>
              <div>{el.url}</div>
              {el.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Score;
