import { useState } from "react";
import aboutIcon from "../assets/about-icon.svg";
import background from "../assets/reviews-bg.png";
import mainImage from "../assets/client-main.png";
import avatar from "../assets/client-avatar.jpg";
import brandOne from "../assets/brand-1.png";
import brandTwo from "../assets/brand-2.png";
import brandThree from "../assets/brand-3.png";
import brandFour from "../assets/brand-4.png";
import brandFive from "../assets/brand-5.png";
import "../style/Testimonials.css";

const reviews = [
  {
    image: mainImage,
    avatar: avatar,
    name: "Brooklyn Simmons",
    role: "Homeowner",
    quote:
      '"The team\'s attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!"',
  },
];

const brands = [brandOne, brandTwo, brandThree, brandFour, brandFive];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;
  const review = reviews[index];

  return (
    <section className="reviews">
      <img src={background} alt="" className="reviews__bg" />
      <img src={review.image} alt="" className="reviews__img" />

      <div className="reviews__label">
        <img src={aboutIcon} alt="" />
        <span>Our Client Say</span>
      </div>

      <h2 className="reviews__title">
        <span>What our satisfied clients</span>
        <strong>are saying</strong>
      </h2>

      <p className="reviews__quote">{review.quote}</p>

      <div className="reviews__person">
        <img src={review.avatar} alt="" />
        <div>
          <h3 className="reviews__name">{review.name}</h3>
          <p className="reviews__role">{review.role}</p>
        </div>
      </div>

      <div className="reviews__nav">
        <button
          type="button"
          className="reviews__btn"
          aria-label="Previous review"
          onClick={() => setIndex((index - 1 + total) % total)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M16 10H4M4 10L9 5M4 10L9 15"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className="reviews__btn"
          aria-label="Next review"
          onClick={() => setIndex((index + 1) % total)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="reviews__line" />

      <div className="reviews__logos">
        {brands.map((brand, i) => (
          <img key={i} src={brand} alt="" />
        ))}
      </div>
    </section>
  );
}