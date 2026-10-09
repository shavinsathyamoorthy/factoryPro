import aboutIcon from "../assets/about-icon.svg";
import storyOne from "../assets/story-1.png";
import storyTwo from "../assets/story-2.png";
import storyThree from "../assets/story-3.png";
import faceOne from "../assets/face-1.png";
import faceTwo from "../assets/face-2.png";
import faceThree from "../assets/face-3.png";
import "../style/Story.css";

const stats = [
  { value: "10k+", label: "Completed Project" },
  { value: "15+", label: "Satisfied Customer" },
  { value: "10k+", label: "Year Of Mastery" },
];

export default function Story() {
  return (
    <section className="story">
      <div className="story__label">
        <img src={aboutIcon} alt="" />
        <span>Our Story</span>
      </div>

      <h2 className="story__title">
        <span>Transforming industries</span>
        <strong>with innovative efficient solutions</strong>
      </h2>

      <img src={storyOne} alt="" className="story__img-1" />
      <img src={storyTwo} alt="" className="story__img-2" />
      <img src={storyThree} alt="" className="story__img-3" />

      <p className="story__text">
        We specialize in revolutionizing industries by delivering innovative,
        efficient solutions that enhance productivity and streamline processes.
        Through advanced technologies, precision engineering, and sustainable
        practices.
      </p>

      <div className="story__stats">
        {stats.map((item, index) => (
          <div className="story__stat" key={index}>
            <span className="story__num">{item.value}</span>
            <span className="story__stat-label">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="story__faces">
        <img src={faceOne} alt="" />
        <img src={faceTwo} alt="" />
        <img src={faceThree} alt="" />
      </div>

      <button type="button" className="story__watch">
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none">
          <circle cx="33" cy="33" r="30" stroke="#ff9900" strokeWidth="6" />
          <path
            d="M28 23.5V42.5L43.5 33L28 23.5Z"
            fill="#ff9900"
            stroke="#ff9900"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <span>Watch Intro</span>
      </button>
    </section>
  );
}