import { Link } from "react-router-dom";
import toplax from "../assets/toplax.png";
import "../style/ServiceSidebar.css";

const categories = [
  { label: "Custom Manufacturing Solution", to: "/services/custom-manufacturing" },
  { label: "Industrial Automation And Robotics", to: "/services" },
  { label: "Product Design And Prototyping", to: "/services" },
  { label: "Equipment Maintenance Support", to: "/services" },
  { label: "Research And Development", to: "/services" },
];

export default function ServiceSidebar() {
  return (
    <aside className="side">
      <div className="side__box">
        <h3 className="side__head">Services Category</h3>
        <ul className="side__list">
          {categories.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="side__link">
                <span>{item.label}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H6M12 4V10"
                    stroke="#111"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="side__help">
        <img src={toplax} alt="Toplax" className="side__logo" />
        <h3 className="side__title">
          Need <strong>help!</strong>
        </h3>
        <p className="side__note">
          Got questions or need assistance with your Industry needs?
        </p>
        <a href="tel:+1840841256" className="side__contact">
          <span className="side__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
                stroke="#ff9900"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>+1 840 841 256</span>
        </a>
        <a href="mailto:info@domain.com" className="side__contact">
          <span className="side__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
          </span>
          <span>info@domain.com</span>
        </a>
      </div>
    </aside>
  );
}