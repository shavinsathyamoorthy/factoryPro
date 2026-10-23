import { Link } from "react-router-dom";
import blogOne from "../assets/blog-1.png";
import blogTwo from "../assets/blog-2.png";
import "../style/BlogList.css";

const posts = [
  {
    image: blogOne,
    title: "Sustainable Practices Reducing Waste in Industrial Production",
  },
  {
    image: blogTwo,
    title: "Advanced Robotics Revolutionizing Industrial Workflows",
  },
  {
    image: null,
    title: "Top Benefits of the Robotics in Manufacturing",
  },
  {
    image: null,
    title: "Leveraging Data Analytics for Smarter Production",
  },
  {
    image: null,
    title: "Reducing Operational Costs Through Automation",
  },
  {
    image: null,
    title: "The Advantages of Customized Manufacturing Solutions",
  },
];

export default function BlogList() {
  return (
    <section className="blog-list">
      <div className="blog-list__grid">
        {posts.map((post) => (
          <article className="blog-list__card" key={post.title}>
            <div className="blog-list__media">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-list__img"
                />
              )}
            </div>
            <h3 className="blog-list__name">{post.title}</h3>
            <Link to="/blog" className="blog-list__more">
              <span>Read More</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="#ff9900"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}