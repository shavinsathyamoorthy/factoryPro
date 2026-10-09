import { Link } from "react-router-dom";
import aboutIcon from "../assets/about-icon.svg";
import factory from "../assets/what-factory.png";
import sideImage from "../assets/what-bg.png";
import iconOne from "../assets/what-1.svg";
import iconTwo from "../assets/what-2.svg";
import iconThree from "../assets/what-3.svg";
import iconFour from "../assets/what-4.svg";
import "../style/WhatWeDo.css";

const items = [
  {
    icon: iconOne,
    title: "Automation Solutions",
    text: "Streamlining processes through cutting-edge technology.",
    filled: false,
  },
  {
    icon: iconTwo,
    title: "Quality Control",
    text: "Ensuring product excellence through rigorous testing.",
    filled: true,
  },
  {
    icon: iconThree,
    title: "Process Engineering",
    text: "Ensuring product excellence through rigorous testing.",
    filled: true,
  },
  {
    icon: iconFour,
    title: "Product Development",
    text: "Streamlining processes through cutting-edge technology.",
    filled: false,
  },
];

export default function WhatWeDo() {
  return (
    <section className="wwd">
      <img src={factory} alt="" className="wwd__factory" />
      <img src={sideImage} alt="" className="wwd__side" />

      <div className="wwd__label">
        <img src={aboutIcon} alt="" />
        <span>What We Do</span>
      </div>

      <h2 className="wwd__title">
        <span>Innovative factory and industry</span>
        <strong>solutions today</strong>
      </h2>

      <div className="wwd__grid">
        {items.map((item) => (
          <div
            key={item.title}
            className={`wwd__card ${item.filled ? "is-filled" : ""}`}
          >
            <img src={item.icon} alt="" className="wwd__icon" />
            <h3 className="wwd__name">{item.title}</h3>
            <p className="wwd__desc">{item.text}</p>
          </div>
        ))}
      </div>

      <p className="wwd__cta">
        Let’s make something great work together.{" "}
        <Link to="/contact">Get Free Quote</Link>
      </p>

      <Link to="/contact" className="wwd__circle" aria-label="Contact now">
        <svg width="125" height="125" viewBox="0 0 125 125" fill="none">
          <circle cx="62.5" cy="62.5" r="62.5" fill="#ff9900" />
          <g className="wwd__ring">
            <path
              id="wwd-ring-path"
              d="M22.5 62.5A40 40 0 1 1 102.5 62.5A40 40 0 1 1 22.5 62.5"
              fill="none"
            />
            <text fill="#ffffff" fontSize="12" fontWeight="600">
              <textPath
                href="#wwd-ring-path"
                textLength="248"
                lengthAdjust="spacing"
              >
                Contact Now • Contact Now •{" "}
              </textPath>
            </text>
          </g>
          <path
            d="M51 74L74 51M74 51H57M74 51V68"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}