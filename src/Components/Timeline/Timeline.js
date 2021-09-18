import React from "react";
import "./Timeline.css";
import Schedule from "./timeline.json";
import Heading from "../Heading/Heading";

const Timeline = () => {
  return (
    <div className="Timeline_wrapper" id="Timeline">
      <Heading title="Timeline" lineWidth="1/5" />

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
