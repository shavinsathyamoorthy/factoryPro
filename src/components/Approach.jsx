import { useState } from "react";
import aboutIcon from "../assets/about-icon.svg";
import missionImg from "../assets/mission.png";
import missionIcon from "../assets/tab-mission.svg";
import visionIcon from "../assets/tab-vision.svg";
import valueIcon from "../assets/tab-value.svg";
import tickIcon from "../assets/tick.svg";
import "../style/Approach.css";

const tabs = [
  {
    key: "mission",
    label: "Our Mission",
    icon: missionIcon,
    text: "Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.",
    points: [
      "Sustainable Manufacturing Practices",
      "Advanced Technology Integration",
      "Community and Environmental Responsibility",
      "Innovation-Driven Growth",
    ],
    image: missionImg,
  },
  {
    key: "vision",
    label: "Our Vision",
    icon: visionIcon,
    text: "Our vision is to lead the future of industry by building smart, efficient and sustainable factories that set new standards for quality, safety and productivity worldwide.",
    points: [
      "Smart And Connected Factories",
      "Zero-Waste Production Goals",
      "Safer Workplaces For Everyone",
      "Global Industry Leadership",
    ],
    image: missionImg,
  },
  {
    key: "value",
    label: "Our Value",
    icon: valueIcon,
    text: "Our values guide every project we deliver, from the first design sketch to the final installation, so our clients can rely on us for honest and lasting results.",
    points: [
      "Integrity And Transparency",
      "Quality In Every Detail",
      "Continuous Improvement",
      "Customer-First Partnership",
    ],
    image: missionImg,
  },
];

export default function Approach() {
  const [active, setActive] = useState("mission");
  const current = tabs.find((tab) => tab.key === active);

  return (
    <section className="approach">
      <div className="approach__bg" />

      <div className="approach__label">
        <img src={aboutIcon} alt="" />
        <span>Our Approach</span>
      </div>

      <h2 className="approach__title">
        <span>Empowering sustainable</span>
        <strong>growth in industry</strong>
      </h2>

      <p className="approach__text">
        We provide a wide range of services tailored to meet the unique needs of
        modern industries. From precision manufacturing and advanced automation
        to custom product design and efficient logistics.
      </p>

      <div className="approach__panel">
        <div className="approach__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`approach__tab approach__tab--${tab.key} ${
                active === tab.key ? "is-active" : ""
              }`}
              onClick={() => setActive(tab.key)}
            >
              <img src={tab.icon} alt="" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="approach__body">
          <div className="approach__info">
            <p className="approach__desc">{current.text}</p>
            <ul className="approach__list">
              {current.points.map((point) => (
                <li key={point}>
                  <img src={tickIcon} alt="" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={current.image} alt={current.label} className="approach__img" />
        </div>
      </div>
    </section>
  );
}