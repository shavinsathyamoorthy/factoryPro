import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import "../style/Navbar.css";

const links = [
  { label: "Home", to: "/", end: true },
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/services",
    chevron: true,
    children: [
      {
        label: "Custom Manufacturing Solution",
        to: "/services/custom-manufacturing",
      },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "Projects", to: "/projects" },
  { label: "Page", to: "/page", chevron: true },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    `navbar__link${isActive ? " is-active" : ""}`;

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={close}>
          <img src={logo} alt="FactoryPro" />
        </Link>

        <button
          type="button"
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
            {links.map((item) => (
              <li className="navbar__item" key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={linkClass}
                  onClick={close}
                >
                  {item.label}
                  {item.chevron && <span className="navbar__chevron" />}
                </NavLink>

                {item.children && (
                  <ul className="navbar__sub">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavLink
                          to={child.to}
                          className="navbar__sublink"
                          onClick={close}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <a href="tel:+01123456789" className="navbar__phone" onClick={close}>
            <img src={phone} alt="" />
            <span>+01 123456789</span>
          </a>
        </nav>
      </div>
    </header>
  );
}