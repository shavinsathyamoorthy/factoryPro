import { Link } from "react-router-dom";
import "../style/Home.css";
import About from "../components/About";
import tick from "../assets/tick.png";
import Services from "../components/Services";
import Story from "../components/Story";
import WhatWeDo from "../components/WhatWeDo";
import OurWork from "../components/OurWork";
import OurProcess from "../components/OurProcess";
import PricingPlan from "../components/PricingPlan";
import Testimonials from "../components/Testimonials";
import LatestBlog from "../components/LatestBlog";



const features = [
  "Advanced Manufacturing Solutions",
  "Quality Assurance Systems",
  "State-of-the-Art Technology",
];

export default function Home() {
  return (
    <>
      <section className="hero">

        <h1 className="hero__title">
          <span>Excellence innovating</span>
          <strong>industry for today</strong>
        </h1>

        <p className="hero__text">
          At the heart of our operations is a commitment to delivering superior
          products through cutting-edge technology and innovative processes.
        </p>

        <Link to="/services" className="hero__btn">
          <span className="hero__btn-label">Explore More</span>
          <span className="hero__btn-arrow">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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

        <div className="hero__bottom">
          <ul className="hero__features">
            {features.map((text) => (
              <li key={text}>
                <img src={tick} alt="" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <About />
      <Services />
      <Story />
      <WhatWeDo />
      <OurWork />
      <OurProcess />
      <PricingPlan />
      <Testimonials />
      <LatestBlog />
    </>
  );
}