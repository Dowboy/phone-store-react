import React, { useState } from "react";
import Phone from "../ui/Phone";

const Phones = ({ phones: intialPhones }) => {
  const [phones, setPhones] = useState(intialPhones);

  async function filterPhones(filter) {
    if (filter === "LOW_TO_HIGH") {
      setPhones(
        intialPhones
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setPhones(
        intialPhones
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }
    if (filter === "RATING") {
      setPhones(intialPhones.slice().sort((a, b) => b.rating - a.rating));
    }
    if (filter === "ANDROID") {
      setPhones(intialPhones.slice().filter((phone) => phone.os === "Android"));
    }
    if (filter === "IOS") {
      setPhones(intialPhones.slice().filter((phone) => phone.os === "iOS"));
    }
  }

  return (
    <div id="phones__body">
      <main id="phones__main">
        <section id="phones">
          <div className="phones__container">
            <div className="row">
              <div className="phones__header">
                <h2 className="section__title phones__header--title">
                  All Phones
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterPhones(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                  <option value="ANDROID">Android</option>
                  <option value="IOS">iOS</option>
                </select>
              </div>
              <div className="phones">
                {phones.map((phone) => (
                  <Phone phone={phone} key={phone.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Phones;
