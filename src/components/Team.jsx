import aboutIcon from "../assets/about-icon.svg";
import memberOne from "../assets/team-1.png";
import memberTwo from "../assets/team-2.png";
import memberThree from "../assets/team-3.png";
import memberFour from "../assets/team-4.png";
import "../style/Team.css";

const members = [
  { image: memberOne, name: "Ronald Richards", role: "Manufacturing Executive" },
  { image: memberTwo, name: "Brooklyn Simmons", role: "Industrial Engineer" },
  { image: memberThree, name: "Cameron Williamson", role: "Production Supervisor" },
  { image: memberFour, name: "Darlene Robertson", role: "Manufacturing Executive" },
];

export default function Team() {
  return (
    <section className="team">
      <div className="team__label">
        <img src={aboutIcon} alt="" />
        <span>Our Team</span>
      </div>

      <h2 className="team__title">
        <span>Core strengths in</span>
        <strong>industrial innovation</strong>
      </h2>

      <button type="button" className="team__btn">
        <span className="team__btn-label">All Member</span>
        <span className="team__btn-arrow">
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

      <div className="team__grid">
        {members.map((member) => (
          <article className="team__card" key={member.name}>
            <img src={member.image} alt={member.name} className="team__img" />
            <h3 className="team__name">{member.name}</h3>
            <p className="team__role">{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}