import { useState } from "react";
import "./App.css";
import Basket from "./assets/basket.svg";
import Avatar from "./assets/avatar.svg";
import Humburger from "./assets/humburger.svg";

import CardComponent from "./components/CardComponent";
import CartComponent from "./components/CartComponent";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + item.qty } : p,
        );
      }
      return [...prev, item];
    });
    // setIsCartOpen(true)
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function checkout() {
    setCart([]);
    setIsCartOpen(false);
  }

  return (
    <>
      <header>
        <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)}>
          <img src={Humburger} alt="humb-icon" />
        </button>

        <div className="logo">
          <h2>sneakers</h2>
        </div>

        <div className="navbar">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="btns">
          <div className="basket-wrapper">
            <button onClick={() => setIsCartOpen((prev) => !prev)}>
              <img src={Basket} alt="basket-icon" />
              {totalQty > 0 && <span className="badge">{totalQty}</span>}
            </button>
            {isCartOpen && (
              <CartComponent
                cart={cart}
                onRemove={removeFromCart}
                onCheckout={checkout}
              />
            )}
          </div>
          <button>
            <img src={Avatar} alt="avatar-icon" />
          </button>
        </div>
      </header>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}

      <div className="main">
        <CardComponent onAddToCart={addToCart} />
      </div>
    </>
  );
}

export default App;
