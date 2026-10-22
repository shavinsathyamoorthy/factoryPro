import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../style/PageBanner.css";
import bannerBg from "../assets/pricing-banner.jpg";

const PageBanner = ({ light, bold, crumbs = [], bg = bannerBg }) => {
  return (
    <section className="page-banner" style={{ "--banner-bg": `url(${bg})` }}>
      <div className="banner-inner">
        <h1 className="banner-title">
          {light}
          {bold && <> <strong>{bold}</strong></>}
        </h1>

        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <Fragment key={crumb.label}>
                <li className="dot" aria-hidden="true"></li>
                {isLast || !crumb.to ? (
                  <li className="current">{crumb.label}</li>
                ) : (
                  <li>
                    <Link to={crumb.to}>{crumb.label}</Link>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PageBanner;