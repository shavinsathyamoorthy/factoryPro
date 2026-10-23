import { useState } from "react";
import PageBanner from "../components/PageBanner";
import aboutIcon from "../assets/about-icon.svg";
import factory from "../assets/factory.png";
import "../style/Contact.css";

const Icon = ({ children }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const items = [
  {
    title: "Contact",
    text: "+1.809.120.670",
    icon: (
      <Icon>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
        <path d="M14.05 6A5 5 0 0 1 18 10" />
      </Icon>
    ),
  },
  {
    title: "E-mail",
    text: "info@domainname.com",
    icon: (
      <Icon>
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </Icon>
    ),
  },
  {
    title: "Our Address",
    text: "37 San.Juan Lane Graaf Florisstraat 22A,3021 CH",
    icon: (
      <Icon>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </Icon>
    ),
  },
];

const empty = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm(empty);
  };

  return (
    <>
      <PageBanner light="Contact" bold="Us" crumbs={[{ label: "Contact Us" }]} />

      <section className="contact">
        <img src={factory} alt="" className="contact__factory" />

        <div className="contact__label">
          <img src={aboutIcon} alt="" />
          <span>Contact Us</span>
        </div>

        <h2 className="contact__title">
          Get in touch <strong>with us</strong>
        </h2>

        <p className="contact__text">
          Reach out for any inquiries, support, or to discuss how we can meet
          your industrial needs.
        </p>

        <ul className="contact__list">
          {items.map((item) => (
            <li className="contact__item" key={item.title}>
              <span className="contact__icon">{item.icon}</span>
              <div>
                <h3 className="contact__name">{item.title}</h3>
                <p className="contact__info">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <form className="contact__form" onSubmit={handleSubmit}>
          <h3 className="contact__heading">
            Contact <strong>me</strong>
          </h3>
          <div className="contact__row">
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone no."
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Write Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="contact__btn">
            Submit Message
          </button>
          {sent && (
            <p className="contact__sent" role="status">
              Thank you! We will get back to you soon.
            </p>
          )}
        </form>

        <iframe
          className="contact__map"
          title="Our location"
          src="https://maps.google.com/maps?q=lastminute.com%20London%20Eye&z=14&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}