import { Fragment, useState } from "react";
import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";
import projectFive from "../assets/project-5.png";
import projectSix from "../assets/project-6.png";
import "../style/ProjectsList.css";

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
  {
    image: projectFive,
    category: "Development",
    title: "Energy-Efficient Manufacturing Systems",
  },
  {
    image: projectSix,
    category: "Development",
    title: "Redesigning Factory Layouts For Efficiency",
  },
];

export default function ProjectsList() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section className="projects">
      <div className="projects__filters">
        {categories.map((name, index) => (
          <Fragment key={name}>
            {index > 0 && <span className="projects__sep">/</span>}
            <button
              type="button"
              className={`projects__filter ${active === name ? "is-active" : ""}`}
              onClick={() => setActive(name)}
            >
              {name}
            </button>
          </Fragment>
        ))}
      </div>

      <div className="projects__grid">
        {visible.map((item) => (
          <article className="projects__card" key={item.title}>
            <div className="projects__media">
              <img src={item.image} alt={item.title} className="projects__img" />
              <span className="projects__tag">{item.category}</span>
            </div>
            <h3 className="projects__name">{item.title}</h3>
          </article>
        ))}
        {visible.length === 0 && (
          <p className="projects__empty">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}