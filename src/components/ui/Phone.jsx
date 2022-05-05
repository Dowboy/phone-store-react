import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Phone = ({ phone }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = phone.url;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 300);
    };
  });

  return (
    <div className="phone">
      {img ? (
        <>
          <Link
            to={`/phones/${phone.id}`}
            onClick={() => (document.documentElement.scrollTop = 0)}
          >
            <figure className="phone__img--wrapper">
              <img src={img.src} alt="" className="phone__img" />
            </figure>
          </Link>
          <div className="phone__title">
            <Link
              to={`/phones/${phone.id}`}
              className="phone__title--link"
              onClick={() => (document.documentElement.scrollTop = 0)}
            >
              {phone.name}
            </Link>
          </div>
          <Rating rating={phone.rating} />
          <>
            <span className="phone__reviews">
              (
              <span
                className="phone__reviews--number"
                onClick={() => alert("Reviews feature not yet implemented :(")}
              >
                {phone.reviews}
              </span>
              )
            </span>
          </>
          <Price
            salePrice={phone.salePrice}
            originalPrice={phone.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="phone__img--skeleton"></div>
          <div className="skeleton phone__title--skeleton"></div>
          <div className="skeleton phone__rating--skeleton"></div>
          <div className="skeleton phone__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Phone;
