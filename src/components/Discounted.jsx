import React from "react";
import { phones } from "../data";
import Phone from "./ui/Phone";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="red">Phones</span>
          </h2>
          <div className="phones">
            {phones
              .filter((phone) => phone.salePrice)
              .slice(0, 8)
              .map((phone) => (
                <Phone phone={phone} key={phone.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
