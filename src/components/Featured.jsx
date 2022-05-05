import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Phone from "./ui/Phone";
import { phones } from "../data";

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Highest Rated <span className="red">Phones</span>
          </h2>
          <div className="phones">
            {phones
              .filter((phone) => phone.rating === 5)
              .slice(0, 4)
              .map((phone) => (
                <Phone phone={phone} key={phone.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
