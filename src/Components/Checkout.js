import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://gos3.ibcdn.com/bann-1553077574.jpg"
          alt=""
          className="checkout_ad"
        />
        <div>
          <SubTotal/>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <h3>Subtotal</h3>
      </div>
    </div>
  );
}

export default Checkout;
