import React from "react";
import "./Faq.css";
import Accordion from "../Accordion/Accordion";
import FAQ from "./faq.json";

const Faq = () => {
  return (
    <section className="faq__main_container" id="FAQs">
      <div className="faq__container">
        <div className="faq__heading">
          <h2>FAQs</h2>
          <hr className="faq__line"></hr>
        </div>

        <div className="faq__wrapper">
          {FAQ.map(({ q, a }) => (
            <Accordion question={q} answer={a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
