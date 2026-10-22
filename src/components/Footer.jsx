import { Link } from "react-router-dom";
import background from "../assets/footer-bg.png";
import logo from "../assets/logo.png";
import socialOne from "../assets/social-1.png";
import socialTwo from "../assets/social-2.png";
import socialThree from "../assets/social-3.png";
import "../style/Footer.css";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Services", to: "/services" },
];

const security = [
  { label: "Term & Condition", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Help", to: "/help" },
  { label: "Contact Us", to: "/contact" },
];

const socials = [socialOne, socialTwo, socialThree];

export default function Footer() {
  return (
    <footer className="footer">
      <img src={background} alt="" className="footer__bg" />

      <h2 className="footer__cta-title">Ready to work with us?</h2>
      <p className="footer__cta-text">
        Join us to experience cutting-edge industrial solutions that drive
        innovation, lasting success.
      </p>

      <Link to="/contact" className="footer__circle" aria-label="Contact now">
        <svg width="130" height="130" viewBox="0 0 125 125" fill="none">
          <circle cx="62.5" cy="62.5" r="62.5" fill="#ff9900" />
          <g className="footer__ring">
            <path
              id="footer-ring-path"
              d="M22.5 62.5A40 40 0 1 1 102.5 62.5A40 40 0 1 1 22.5 62.5"
              fill="none"
            />
            <text fill="#ffffff" fontSize="12" fontWeight="600">
              <textPath
                href="#footer-ring-path"
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

      <div className="footer__line" />

      <img src={logo} alt="FactoryPro" className="footer__logo" />
      <p className="footer__about">
        We are committed to providing personalized industrial solutions.
      </p>

      <div className="footer__social">
        {socials.map((icon, index) => (
          <a href="#" key={index} aria-label="Social link">
            <img src={icon} alt="" />
          </a>
        ))}
      </div>

      <div className="footer__cols">
        <div>
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Security</h3>
          <ul>
            {security.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="tel:+91123654789">+91 123654789</a>
            </li>
            <li>
              <a href="mailto:info@domainname.com">info@domainname.com</a>
            </li>
            <li>520, West Valley, Amin and minim</li>
          </ul>
        </div>
      </div>

      <div className="footer__line footer__line--end" />

      <p className="footer__copy">Copyright © 2024 All Rights Reserved.</p>
    </footer>
  );
}