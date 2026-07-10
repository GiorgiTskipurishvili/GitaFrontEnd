import "./CardComponent.css";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Minus from "../assets/minus.svg";
import Plus from "../assets/plus.svg";
import Cart from "../assets/cart.svg";
import Next from "../assets/next.svg";
import Previous from "../assets/previous.svg";
import Cancel from "../assets/cancel.svg";

import { useState } from "react";

const images = [Image1, Image2, Image3, Image4];

export default function CardComponent({ onAddToCart }) {
  const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  function handleAddToCart() {
    if (count === 0) return;
    onAddToCart({
      id: "fall-limited-sneakers",
      title: "Fall Limited Edition Sneakers",
      price: 125,
      image: Image1,
      qty: count,
    });
    setCount(0);
  }

  function nextImage() {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <>
      <div className="card-container">
        <div className="product-img_section">
          <div className="main-img-wrapper">
            <img
              src={images[activeIndex]}
              alt="main-img"
              onClick={() => setIsLightboxOpen(true)}
              className="main-img"
            />
            <button className="mobile-arrow left" onClick={prevImage}>
              <img src={Previous} alt="previous-icon" />
            </button>
            <button className="mobile-arrow right" onClick={nextImage}>
              <img src={Next} alt="next-icon" />
            </button>
          </div>

          <div className="imgs">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`img${index + 1}`}
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail__section">
          <p>SNEAKER COMPANY</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <h4>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </h4>
          <div className="price">
            <div className="price-discount">
              <h2>$125.00</h2>
              <label>50%</label>
            </div>
            <h3>$250.00</h3>
          </div>
          <div className="cart-section">
            <div className="quantity-section">
              <button
                onClick={() => {
                  if (count > 0) setCount(count - 1);
                }}
              >
                <img src={Minus} alt="decrease-icon" />
              </button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>
                <img src={Plus} alt="increase-icon" />
              </button>
            </div>

            <button onClick={handleAddToCart}>
              <img src={Cart} alt="cart-icon" /> Add to cart
            </button>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setIsLightboxOpen(false)}
            >
              <img src={Cancel} alt="cancel-icon" />
            </button>
            <button className="arrow-btn left" onClick={prevImage}>
              <img src={Previous} alt="previous-icon" />
            </button>
            <img
              src={images[activeIndex]}
              alt="lightbox-img"
              className="lightbox-img"
            />
            <button className="arrow-btn right" onClick={nextImage}>
              <img src={Next} alt="next-icon" />
            </button>
            <div className="lightbox-thumbs">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb${index}`}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
