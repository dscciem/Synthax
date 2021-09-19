import React from "react";
import Arrow from "./Arrow.svg";
import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <label
      className="faq__accordion cursor-pointer"
      onClick={(e) => setIsOpen(!isOpen)}
    >
      <div className="faq__accordion__header p-10">
        {question}
        <img className="faq__arrow" src={Arrow} alt="image23" />
      </div>
      {isOpen ? (
        <div className="faq__accordion__content">
          <p>{answer}</p>
        </div>
      ) : null}
    </label>
  );
};

export default Accordion;
