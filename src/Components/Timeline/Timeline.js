import React from "react";
import "./Timeline.css";
import Schedule from "./timeline.json";

const Timeline = () => {
  return (
    <div className="Timeline_wrapper" id="Timeline">
      <div className="head">
        <div className="Timeline_head">
          <h2 className="heading">Timeline</h2>
          <hr className="liness"></hr>
        </div>
      </div>

      <div className="main">
        <div className="timeline">
          <ul>
            {Schedule.map(({ name, period }) => (
              <li>
                <div className="timeline-content">
                  <h3 className="date">{period}</h3>
                  <p>{name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
