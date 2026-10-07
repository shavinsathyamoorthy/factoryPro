import { Link } from "react-router-dom";
import imgOne from "../assets/about-1.png";
import imgTwo from "../assets/about-2.png";
import factory from "../assets/factory.png";
import aboutIcon from "../assets/about-icon.svg";
import tick from "../assets/tick.png";
import "../style/About.css";

const points = [
  "Sustainable Manufacturing",
  "Advanced Automation",
  "Efficient Production Processes",
  "Reliable Delivery Services",
];

export default function About() {
  return (
    <section className="about">
      <img src={factory} alt="" className="about__factory" />

      <img src={imgOne} alt="" className="about__img-1" />
      <img src={imgTwo} alt="" className="about__img-2" />

      <div className="about__years">
        <span className="about__years-num">25+</span>
        <span className="about__years-text">Year Of Experience</span>
      </div>

      <div className="about__label">
        <img src={aboutIcon} alt="" />
        <span>About Us</span>
      </div>

      <h2 className="about__title">
        <span>Building quality through</span>
        <strong>industrial innovation</strong>
      </h2>

      <p className="about__text">
        At the heart of our operations is a commitment to delivering superior
        products through cutting-edge technology and innovative processes.
      </p>

      <ul className="about__list">
        {points.map((text) => (
          <li key={text}>
            <img src={tick} alt="" />
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <Link to="/about" className="about__btn">
        <span className="about__btn-label">Learn More</span>
        <span className="about__btn-arrow">
          <svg width="24" height="24" viewBox="0 0 14 14" fill="none">
            <path
              d="M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>

      <div className="about__rating">
        <div className="about__stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 20 20">
              <path
                d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7L10 1.5z"
                fill="#ff9900"
              />
            </svg>
          ))}
        </div>
        <span className="about__rating-text">15.5K Genuine Rating</span>
      </div>
    </section>
  );
}