import { Fragment, useState } from "react";
import aboutIcon from "../assets/about-icon.svg";
import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";
import "../style/OurWork.css";

const categories = [
  "All",
  "Automation",
  "Development",
  "Infrastructure",
  "Manufacturing",
  "Sustainability",
];

const projects = [
  {
    image: projectOne,
    category: "Development",
    title: "Total Quality Management Implementation",
  },
  {
    image: projectTwo,
    category: "Automation",
    title: "Advanced Research In Material Science",
  },
  {
    image: projectThree,
    category: "Infrastructure",
    title: "Workplace Safety Enhancement Initiative",
  },
  {
    image: projectFour,
    category: "Infrastructure",
    title: "Robotic Process Automation Deployment",
  },
];

export default function OurWork() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section className="work">
      <div className="work__label">
        <img src={aboutIcon} alt="" />
        <span>Our Work</span>
      </div>

      <h2 className="work__title">
        <span>Our successful project</span>
        <strong>initiatives</strong>
      </h2>

      <p className="work__text">
        Our successful project initiatives showcase our commitment to excellence
        and innovation across various industries.
      </p>

      <div className="work__filters">
        {categories.map((name, index) => (
          <Fragment key={name}>
            {index > 0 && <span className="work__sep">/</span>}
            <button
              type="button"
              className={`work__filter ${active === name ? "is-active" : ""}`}
              onClick={() => setActive(name)}
            >
              {name}
            </button>
          </Fragment>
        ))}
      </div>

      <div className="work__grid">
        {visible.map((item) => (
          <article className="work__card" key={item.title}>
            <img src={item.image} alt={item.title} className="work__img" />
            <span className="work__tag">{item.category}</span>
            <h3 className="work__name">{item.title}</h3>
          </article>
        ))}
        {visible.length === 0 && (
          <p className="work__empty">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}