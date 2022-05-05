import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Browse more <span className="red">Phones</span>
          </h2>
          <Link
            to="/phones"
            onClick={() => (document.documentElement.scrollTop = 0)}
          >
            <button className="btn">Browse Phones</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
