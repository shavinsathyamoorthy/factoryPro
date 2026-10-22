import { Link } from "react-router-dom";
import aboutIcon from "../assets/about-icon.svg";
import blogOne from "../assets/blog-1.png";
import blogTwo from "../assets/blog-2.png";
import "../style/LatestBlog.css";

const posts = [
  {
    image: blogOne,
    title: "Sustainable Practices Reducing Waste in Industrial Production",
  },
  {
    image: blogTwo,
    title: "Advanced Robotics Revolutionizing Industrial Workflows",
  },
];

export default function LatestBlog() {
  return (
    <section className="blog">
      <div className="blog__label">
        <img src={aboutIcon} alt="" />
        <span>Latest Blog</span>
      </div>

      <h2 className="blog__title">
        <span>Insights from our</span>
        <strong>latest blogs</strong>
      </h2>

      <p className="blog__text">
        Stay updated with the latest trends, innovations, and expert insights in
        the manufacturing and industrial sectors
      </p>

      <div className="blog__grid">
        {posts.map((post) => (
          <article className="blog__card" key={post.title}>
            <img src={post.image} alt={post.title} className="blog__img" />
            <div className="blog__row">
              <h3 className="blog__name">{post.title}</h3>
              <Link to="/blog" className="blog__arrow" aria-label={post.title}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M6 14L14 6M14 6H7.5M14 6V12.5"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}