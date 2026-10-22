import { useState } from "react";
import aboutIcon from "../assets/about-icon.svg";
import processImage from "../assets/process.png";
import "../style/OurProcess.css";

const steps = [
  {
    num: "01",
    title: "Understanding Your Needs",
    text: "We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.",
  },
  {
    num: "02",
    title: "Design and Planning",
    text: "Our team collaborates to create detailed project plans, ensuring all aspects of the process.",
  },
  {
    num: "03",
    title: "Implementation",
    text: "Utilizing advanced technologies and skilled personnel, we execute the project",
  },
];

export default function OurProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="proc">
      <div className="proc__label">
        <img src={aboutIcon} alt="" />
        <span>Our Process</span>
      </div>

      <h2 className="proc__title">
        Streamlined processes <strong>for optimal efficiency</strong>
      </h2>

      <p className="proc__text">
        Our process is designed to maximize efficiency and quality at every
        stage of production. By integrating advanced technologies and best
        practices, we ensure seamless workflows.
      </p>

      <img src={processImage} alt="" className="proc__img" />

      <div className="proc__steps">
        {steps.map((step, index) => (
          <div
            key={step.num}
            className={`proc__step ${active === index ? "is-active" : ""}`}
            onMouseEnter={() => setActive(index)}
          >
            <span className="proc__num">{step.num}</span>
            <div className="proc__body">
              <h3 className="proc__head">{step.title}</h3>
              <p className="proc__desc">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}