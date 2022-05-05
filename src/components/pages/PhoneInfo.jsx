import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Phone from "../ui/Phone";
import Price from "../ui/Price";
import Rating from "../ui/Rating";

const PhoneInfo = ({ phones, addToCart, cart }) => {
  const { id } = useParams();
  const phone = phones.find((phone) => +phone.id === +id);

  function addPhoneToCart(phone) {
    addToCart(phone);
  }

  function phoneExistsOnCart() {
    return cart.find((phone) => phone.id === +id);
  }

  return (
    <div id="phones__body">
      <main id="phones__main">
        <div className="phones__container">
          <div className="row">
            <div className="phone__selected--top">
              <Link to="/phones" className="phone__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/phones" className="phone__link">
                <h2 className="phone__selected--title--top">Phones</h2>
              </Link>
            </div>
            <div className="phone__selected">
              <figure className="phone__selected--figure">
                <img src={phone.url} alt="" className="phone__selected--img" />
              </figure>
              <div className="phone__selected--description">
                <h2 className="phone__selected--title">{phone.name}</h2>
                <Rating rating={phone.rating} />
                <div className="phone__selected--price">
                  <Price
                    originalPrice={phone.originalPrice}
                    salePrice={phone.salePrice}
                  />
                </div>
                <div className="phone__sumary">
                  <h3 className="phone__summary--title">Summary</h3>
                  <p className="phone__summary--para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Blanditiis ipsum aut eaque dolorum eveniet obcaecati
                    ratione? Cum recusandae porro quisquam vero, facere nulla
                    quasi praesentium pariatur repellendus placeat vitae
                    tenetur!
                  </p>
                </div>
                {phoneExistsOnCart() ? (
                  <Link
                    to={`/cart`}
                    className="phone__link"
                    onClick={() => (document.documentElement.scrollTop = 0)}
                  >
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addPhoneToCart(phone)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="phones__container">
          <div className="row">
            <div className="phone__selected--top">
              <h2 className="phone__selected--title--top">
                Recommended Phones
              </h2>
            </div>
            <div className="phones">
              {phones
                .filter((phone) => phone.rating === 5 && +phone.id !== +id)
                .slice(0, 4)
                .map((phone) => (
                  <Phone phone={phone} key={phone.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhoneInfo;
