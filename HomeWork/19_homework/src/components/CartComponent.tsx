import "./CartComponent.css";
import Delete from "../assets/delete.svg";

export default function CartComponent({ cart, onRemove, onCheckout }) {
  return (
    <div className="cart-container">
      <div className="header">
        <h3>Cart</h3>
      </div>

      {cart.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="product-section" key={item.id}>
              <div className="product-details">
                <img src={item.image} alt="img" />
                <div className="product-about">
                  <p>{item.title}</p>
                  <div className="total">
                    <p>
                      ${item.price.toFixed(2)} x {item.qty}
                    </p>
                    <p className="total-price">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)}>
                <img src={Delete} alt="delete-icon" />
              </button>
            </div>
          ))}
          <button onClick={onCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}
