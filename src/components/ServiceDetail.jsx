import { useState } from "react";
import ServiceSidebar from "./ServiceSidebar";
import mainImg from "../assets/service-main.png";
import planOne from "../assets/service-plan-1.png";
import planTwo from "../assets/service-plan-2.png";
import iconOne from "../assets/robotics-1.svg";
import iconTwo from "../assets/robotics-2.svg";
import iconThree from "../assets/robotics-3.svg";
import iconFour from "../assets/robotics-4.svg";
import tickIcon from "../assets/tick.svg";
import "../style/ServiceDetail.css";

const featureText =
  "Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.";

const features = [
  { icon: iconOne, title: "Enhanced Efficiency", text: featureText },
  { icon: iconTwo, title: "Enhanced Efficiency", text: featureText },
  { icon: iconThree, title: "Enhanced Efficiency", text: featureText },
  { icon: iconFour, title: "Enhanced Efficiency", text: featureText },
];

const plan = [
  "Needs Assessment",
  "Timeline and Milestones",
  "Feasibility and ROI",
  "Technology Selection",
  "Process Optimization",
  "Scalability Planning",
];

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We work with automotive, electronics, packaging, energy and many other industrial sectors that need reliable custom manufacturing.",
  },
  {
    q: "How do we ensure product quality?",
    a: "We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.",
  },
  {
    q: "What sustainability practices do you follow?",
    a: "We reduce waste, recycle materials and use energy-efficient machines to keep our production responsible and sustainable.",
  },
  {
    q: "Do you offer customized solutions?",
    a: "Yes. Every solution is designed around your specifications, from materials and tolerances to volume and delivery time.",
  },
  {
    q: "How do we handle safety in the workplace?",
    a: "We follow strict safety standards, regular training and equipment inspections so every team member works in a safe place.",
  },
];

export default function ServiceDetail() {
  const [open, setOpen] = useState(1);

  return (
    <section className="detail">
      <div className="detail__inner">
        <ServiceSidebar />

        <div className="detail__main">
          <img src={mainImg} alt="Custom manufacturing" className="detail__hero" />

          <p className="detail__text">
            Our business coaching services are designed to help entrepreneurs
            and professionals unlock their full potential, overcome challenges,
            and achieve sustainable growth. We provide tailored strategies and
            expert insights to improve leadership skills, enhance team
            performance, and streamline business operations. Whether
            you&apos;re launching a startup or scaling an established business,
            our coaching empowers you to make informed decisions, set clear
            goals, and drive meaningful results. With a focus on both personal
            development and business success, we guide you toward building a
            thriving, purpose-driven enterprise.
          </p>
          <p className="detail__text">
            Through expert guidance, we focus on refining your vision, enhancing
            operations, and unlocking new opportunities for growth. With a
            collaborative approach, we empower you to make confident decisions
            and build a sustainable, thriving business.
          </p>

          <h2 className="detail__title">
            Why choose <strong>robotics services</strong>
          </h2>
          <p className="detail__text">
            Through expert guidance, we focus on refining your vision, enhancing
            operations, and unlocking new opportunities for growth. With a
            collaborative approach, we empower you to make confident decisions
            and build a sustainable, thriving business.
          </p>

          <div className="detail__features">
            {features.map((item) => (
              <div className="detail__feature" key={item.icon}>
                <img src={item.icon} alt="" />
                <h3 className="detail__fname">{item.title}</h3>
                <p className="detail__ftext">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="detail__title">
            Planning &amp; <strong>strategy</strong>
          </h2>
          <p className="detail__text">
            Our Industrial Automation and Robotics planning and strategy
            services focus on designing tailored automation solutions that align
            with your business goals.
          </p>

          <ul className="detail__plan">
            {plan.map((item) => (
              <li key={item}>
                <img src={tickIcon} alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="detail__gallery">
            <img src={planOne} alt="Robotic welding" />
            <img src={planTwo} alt="Robotic assembly line" />
          </div>

          <h2 className="detail__title">
            Frequently asked <strong>questions</strong>
          </h2>

          <div className="detail__faq">
            {faqs.map((item, index) => (
              <div
                className={`detail__q ${open === index ? "is-open" : ""}`}
                key={item.q}
              >
                <button
                  type="button"
                  className="detail__qhead"
                  aria-expanded={open === index}
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span>{item.q}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 6L8 11L13 6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {open === index && <p className="detail__a">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}