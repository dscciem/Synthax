import React from "react";
import "./Faq.css";
import Accordion from "../Accordion/Accordion";
import FAQ from "./faq.json";
import Heading from "../Heading/Heading";

const Faq = () => {
  return (
    <section className="faq__main_container py-12" id="FAQs">
      <div className="faq__container">
        <Heading title="FAQs" lineWidth="1/5" />

        <div className="faq__wrapper">
          {FAQ.map(({ q, a }) => (
            <Accordion question={q} answer={a} key={q} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
