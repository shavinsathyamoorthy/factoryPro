import { useState } from "react";
import { Link } from "react-router-dom";
import aboutIcon from "../assets/about-icon.svg";
import tick from "../assets/tick.png";
import decoOne from "../assets/plan-deco-1.svg";
import decoTwo from "../assets/plan-deco-2.svg";
import decoThree from "../assets/plan-deco-3.svg";
import noteOne from "../assets/plan-note-1.png";
import noteTwo from "../assets/plan-note-2.svg";
import noteThree from "../assets/plan-note-3.png";
import "../style/PricingPlan.css";

const decos = [decoOne, decoTwo, decoThree];

const features = [
  "Standard Manufacturing Services",
  "Quality Control Checks",
  "Technical Support",
  "Monthly Progress Reports",
];

const notes = [
  { icon: noteOne, text: "Get 30 day free trial" },
  { icon: noteTwo, text: "No any hidden fees pay" },
  { icon: noteThree, text: "You can cancel anytime" },
];

export default function PricingPlan() {
  const [active, setActive] = useState(0);

  return (
    <section className="pricing">
      <div className="pricing__label">
        <img src={aboutIcon} alt="" />
        <span>Pricing Plan</span>
      </div>

      <h2 className="pricing__title">
        <span>Transparent pricing for</span>
        <strong>every solution</strong>
      </h2>

      <p className="pricing__text">
        We believe in providing clear and upfront pricing to ensure that you
        understand the value of our services.
      </p>

      <div className="pricing__grid">
        {decos.map((deco, index) => (
          <article
            key={index}
            className={`pricing__card ${active === index ? "is-active" : ""}`}
            onMouseEnter={() => setActive(index)}
          >
            <img src={deco} alt="" className="pricing__deco" />

            <div className="pricing__price">
              <span className="pricing__cur">$</span>
              <span className="pricing__amt">39</span>
              <span className="pricing__per">/month</span>
            </div>

            <h3 className="pricing__name">Advanced Plan</h3>

            <ul className="pricing__list">
              {features.map((text) => (
                <li key={text}>
                  <img src={tick} alt="" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="pricing__btn">
              Purchase Now
            </Link>
          </article>
        ))}
      </div>

      <ul className="pricing__notes">
        {notes.map((note) => (
          <li key={note.text}>
            <img src={note.icon} alt="" />
            <span>{note.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}