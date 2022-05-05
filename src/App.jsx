import Nav from "./components/Nav";
import "./index.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Phones from "./components/pages/Phones";
import { phones } from "./data";
import PhoneInfo from "./components/pages/PhoneInfo";
import Cart from "./components/pages/Cart";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(phone) {
    setCart([...cart, { ...phone, quantity: 1 }]);
  }

  function changeQuantity(phone, quantity) {
    setCart(
      cart.map((item) =>
        item.id === phone.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter((phone) => phone.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" exact element={<Phones phones={phones} />} />
          <Route
            path="/phones/:id"
            element={
              <PhoneInfo phones={phones} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                phones={phones}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
