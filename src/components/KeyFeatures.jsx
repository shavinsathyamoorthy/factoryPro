import aboutIcon from "../assets/about-icon.svg";
import iconOne from "../assets/robotics-01.svg";
import iconTwo from "../assets/robotics-03.svg";
import iconThree from "../assets/robotics-04.svg";
import keyImg from "../assets/key-feature.png";
import "../style/KeyFeatures.css";

const items = [
  {
    icon: iconOne,
    title: "Advanced Technology Integration",
    text: "We integrate cutting-edge technologies into every aspect of our operations, enhancing efficiency, precision, and innovation to deliver superior industrial solutions.",
  },
  {
    icon: iconTwo,
    title: "Uncompromising Quality Standards",
    text: "We uphold the highest quality standards across all processes, ensuring consistency, reliability, and excellence in every product and service we deliver.",
  },
  {
    icon: iconThree,
    title: "Continuous Innovation and R&D",
    text: "We prioritize ongoing research and development to drive continuous innovation, staying ahead of industry trends and creating advanced solutions that meet evolving market demands.",
  },
];

export default function KeyFeatures() {
  return (
    <section className="key">
      <div className="key__label">
        <img src={aboutIcon} alt="" />
        <span>Our Key Feature</span>
      </div>

      <h2 className="key__title">
        <span>Core strengths in</span>
        <strong>industrial innovation</strong>
      </h2>

      <p className="key__text">
        Our expertise in industrial innovation combines advanced technology,
        sustainable practices, and a skilled workforce to deliver efficient,
        future-ready solutions that drive industry progress
      </p>

      <div className="key__grid">
        {items.map((item) => (
          <div className="key__card" key={item.title}>
            <img src={item.icon} alt="" />
            <h3 className="key__name">{item.title}</h3>
            <p className="key__desc">{item.text}</p>
          </div>
        ))}
        <img src={keyImg} alt="Industrial grinding" className="key__img" />
      </div>
    </section>
  );
}