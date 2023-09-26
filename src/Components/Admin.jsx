import React from "react";
import Topsection from "./Topsection";
import "./Admin.css";
import Midsection from "./Midsection";
const bottom1 = [
  { no: "04", url: "imge123.jpg", name: "Moni", point: "223pt" },
  { no: "05", url: "imge123.jpg", name: "Esha", point: "160pt" },
  { no: "06", url: "imge123.jpg", name: "Kaosar", point: "140pt" },
  { no: "07", url: "imge123.jpg", name: "Sam", point: "130pt" },
  { no: "18", url: "imge123.jpg", name: "Moni", point: "120pt" },
];
const Admin = () => {
  return (
    <div className="container1">
      <Topsection />
      <Midsection />
      <div className="bottom_admin">
        {bottom1.map((el, index) => (
          <>
            <div className="bottom_admin_rank">
              <span>{el.no}</span>
              <span>
                <img
                  style={{ width: "30px", borderRadius: "20px" }}
                  src={el.url}
                />
              </span>
              <span>{el.name}</span>
              <span>{el.point}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Admin;
