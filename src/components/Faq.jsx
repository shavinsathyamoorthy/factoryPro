import { useState } from "react";
import aboutIcon from "../assets/about-icon.svg";
import faqImg from "../assets/faq.png";
import "../style/Faq.css";

const faqs = [
  {
    q: "What industries do you serve?",
    a: "We work with automotive, electronics, packaging, energy and many other industrial sectors that need reliable custom manufacturing.",
  },
  {
    q: "How do you ensure product quality?",
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
    q: "How do you handle safety in the workplace?",
    a: "We follow strict safety standards, regular training and equipment inspections so every team member works in a safe place.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq">
      <div className="faq__label">
        <img src={aboutIcon} alt="" />
        <span>FAQs</span>
      </div>

      <h2 className="faq__title">
        <span>Frequently asked</span>
        <strong>questions</strong>
      </h2>

      <button type="button" className="faq__btn">
        <span className="faq__btn-label">All FAQs</span>
        <span className="faq__btn-arrow">
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
      </button>

      <div className="faq__photo">
        <img src={faqImg} alt="Industrial plant" />
        <div className="faq__contact">
          <a href="tel:+911236547890" className="faq__link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
                stroke="#ff9900"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>+91 1236547890</span>
          </a>
          <a href="mailto:info@domainname.com" className="faq__link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
                stroke="#ff9900"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 7l10 6 10-6"
                stroke="#ff9900"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>info@domainname.com</span>
          </a>
        </div>
      </div>

      <div className="faq__list">
        {faqs.map((item, index) => (
          <div
            className={`faq__item ${open === index ? "is-open" : ""}`}
            key={item.q}
          >
            <button
              type="button"
              className="faq__head"
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
            {open === index && <p className="faq__a">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}