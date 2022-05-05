import React from "react";

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="phone__price">
      {salePrice ? (
        <>
          <span className="phone__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice}</>
      )}
    </div>
  );
};

export default Price;
