import { useState } from "react";
import aboutIcon from "../assets/about-icon.svg";
import tickIcon from "../assets/tick.svg";
import historyImg from "../assets/history.png";
import "../style/History.css";

const items = [
  {
    tab: "In 1920 - Planning",
    light: "Company",
    bold: "started",
    text: "Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.",
    points: [
      "Quality Control System",
      "Building Quality Industrial",
      "Environmental Responsibility",
      "Building Quality Industrial",
    ],
    image: historyImg,
  },
  {
    tab: "In 1922 - Journey Started",
    light: "Journey",
    bold: "started",
    text: "Our first workshop opened its doors with a small team and a big goal: to deliver dependable manufacturing solutions that local industries could trust.",
    points: [
      "First Production Line",
      "Skilled Local Workforce",
      "Trusted Client Partnerships",
      "Commitment To Quality",
    ],
    image: historyImg,
  },
  {
    tab: "In 1925 - Journey Progress",
    light: "Journey",
    bold: "progress",
    text: "Steady growth brought new machinery, larger facilities and fresh expertise, allowing us to take on bigger projects across many industries.",
    points: [
      "Expanded Facilities",
      "Modern Machinery",
      "Wider Product Range",
      "Stronger Supply Chain",
    ],
    image: historyImg,
  },
  {
    tab: "In 1930 - Global Reach",
    light: "Global",
    bold: "reach",
    text: "We began serving customers beyond our borders, building partnerships worldwide and bringing our standards of quality to international markets.",
    points: [
      "International Clients",
      "Global Logistics Network",
      "Certified Standards",
      "Worldwide Support",
    ],
    image: historyImg,
  },
  {
    tab: "In 1940 - Industry Leadership",
    light: "Industry",
    bold: "leadership",
    text: "Today we are recognised as a leader in the industrial sector, driving innovation, sustainability and progress for the next generation of manufacturers.",
    points: [
      "Innovation-Driven Growth",
      "Sustainable Practices",
      "Industry Recognition",
      "Future-Ready Solutions",
    ],
    image: historyImg,
  },
];

export default function History() {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="history">
      <div className="history__label">
        <img src={aboutIcon} alt="" />
        <span>Our History</span>
      </div>

      <h2 className="history__title">
        <span>Foundation of excellences</span>
        <strong>in industry</strong>
      </h2>

      <p className="history__text">
        Built on a legacy of quality and innovation, we have established a
        strong foundation in the industrial sector, consistently delivering
        reliable solutions that drive progress and set industry standards.
      </p>

      <div className="history__wrap">
        <div className="history__tabs">
          {items.map((item, index) => (
            <button
              key={item.tab}
              type="button"
              className={`history__tab ${active === index ? "is-active" : ""}`}
              onClick={() => setActive(index)}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div className="history__content">
          <div className="history__info">
            <h3 className="history__heading">
              <span>{current.light}</span> <strong>{current.bold}</strong>
            </h3>
            <p className="history__desc">{current.text}</p>
            <ul className="history__list">
              {current.points.map((point, index) => (
                <li key={`${point}-${index}`}>
                  <img src={tickIcon} alt="" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={current.image}
            alt={current.tab}
            className="history__img"
          />
        </div>
      </div>
    </section>
  );
}