import { Link } from "react-router-dom";
import aboutIcon from "../assets/about-icon.svg";
import iconOne from "../assets/service-1.svg";
import iconTwo from "../assets/service-2.svg";
import iconThree from "../assets/service-3.svg";
import iconFour from "../assets/service-4.svg";
import "../style/Services.css";

const services = [
  { icon: iconOne, title: "Custom Manufacturing Solution" },
  { icon: iconTwo, title: "Industrial Automation And Robotics" },
  { icon: iconThree, title: "Product Design And Prototyping" },
  { icon: iconFour, title: "Equipment Maintenance Support" },
];

export default function Services() {
  return (
    <section className="services">
      <div className="services__bg" />

      <div className="services__label">
        <img src={aboutIcon} alt="" />
        <span>Services</span>
      </div>

      <h2 className="services__title">
        <span>Comprehensive solutions</span>
        <strong>for industrial excellence</strong>
      </h2>

      <p className="services__text">
        We provide a wide range of services tailored to meet the unique needs of
        modern industries. From precision manufacturing and advanced automation
        to custom product design and efficient logistics.
      </p>

      <div className="services__panel">
        <div className="services__grid">
          {services.map((item) => (
            <div className="services__card" key={item.title}>
              <img src={item.icon} alt="" className="services__icon" />
              <h3 className="services__name">{item.title}</h3>
              <Link to="/services" className="services__arrow" aria-label={item.title}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                    stroke="#111111"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}