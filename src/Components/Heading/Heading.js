import React from "react";

const Heading = ({ title, lineWidth }) => {
  return (
    <div className="flex flex-1 flex-col bg-gray-light">
      <h2 className="text-center text-6xl text-brown-light">{title}</h2>
      <hr
        className={`bg-yellow-light my-3 border-yellow-light border-2 ml-auto mr-auto`}
        style={{ width: lineWidth }}
      />
    </div>
  );
};

export default Heading;
