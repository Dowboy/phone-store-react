import React from "react";
import { Link } from "react-router-dom";
import UndrawPhones from "../assets/undraw_mobile.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Best place in the world to find your next phone</h1>
            <h2>
              Find your new phone with <span className="red">Seb Phones</span>
            </h2>
            <Link to="/phones">
              <button className="btn">Browse phones</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawPhones} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
