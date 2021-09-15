import React from "react";

import "./Timeline.css";

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
            <li>
              <div className="timeline-content">
                <h3 className="date">14th sept - 23rd sept</h3>
                <p>Project Admin Registration</p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h3 className="date">19th sept - 30th sept</h3>
                <p>Project Contributors registration</p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h3 className="date">27th sept</h3>
                <p>Program begins</p>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h3 className="date">30th oct</h3>
                <p>Program Ends</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
