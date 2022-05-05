import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/" onClick={() => (document.documentElement.scrollTop = 0)}>
            <figure className="footer__logo">
              <FontAwesomeIcon
                icon="mobile-screen"
                className="footer__logo--img"
              />
            </figure>
          </Link>
          <div className="footer__list">
            <Link
              to="/"
              className="footer__link"
              onClick={() => (document.documentElement.scrollTop = 0)}
            >
              Home
            </Link>
            <span
              href="/"
              className="footer__link no-cursor"
              onClick={() => alert("About section not implemented:(")}
            >
              About
            </span>
            <Link
              to="/phones"
              className="footer__link"
              onClick={() => (document.documentElement.scrollTop = 0)}
            >
              Phones
            </Link>
            <Link
              to="/cart"
              className="footer__link"
              onClick={() => (document.documentElement.scrollTop = 0)}
            >
              Cart
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2022 Seb Phones
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
