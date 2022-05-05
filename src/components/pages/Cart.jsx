import React from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../../assets/actual_empty_cart.svg";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.originalPrice) * item.quantity);
    });
    return price;
  };

  return (
    <div id="phones__body">
      <div className="phones__main">
        <div className="phones__container">
          <div className="row">
            <div className="phone__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__phone">Phone</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((phone) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__phone">
                        <img
                          src={phone.url}
                          className="cart__phone--img"
                          alt=""
                        />
                        <div className="cart__phone--info">
                          <span className="cart__phone--title">
                            {phone.name}
                          </span>
                          <span className="cart__phone--price">
                            $
                            {(phone.salePrice || phone.originalPrice).toFixed(
                              2
                            )}
                          </span>
                          <button
                            className="cart__phone--remove"
                            onClick={() => removeItem(phone)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={10}
                          className="cart__input"
                          value={phone.quantity}
                          onChange={(event) =>
                            changeQuantity(phone, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          (phone.salePrice || phone.originalPrice) *
                          phone.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You don't have any phones in your cart.</h2>
                  <Link to="/phones">
                    <button className="btn">Browse phones</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${(total() * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(total() * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Total</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() =>
                    alert("Checkout feature not implemented yet:(")
                  }
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
