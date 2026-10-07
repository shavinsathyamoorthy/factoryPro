import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import phoneIcon from "../assets/phone.png";
import "../style/Navbar.css";

const links = [
  { label: "Home", to: "/", end: true },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services", dropdown: true },
  { label: "Blog", to: "/blog" },
  { label: "Projects", to: "/projects" },
  { label: "Page", to: "/page", dropdown: true },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="FactoryPro" />
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__menu ${open ? "is-open" : ""}`}>
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? "is-active" : ""}`
                  }
                >
                  {link.label}
                  {link.dropdown && <span className="navbar__chevron" />}
                </NavLink>
              </li>
            ))}
          </ul>

          <a href="tel:+01123456789" className="navbar__phone">
            <img src={phoneIcon} alt="" />
            <span>+01 123456789</span>
          </a>
        </nav>
      </div>
    </header>
  );
}