
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Order.css";

function Order({ cart = [], setShowPayment }) {
  const [method, setMethod] = useState("");
  const [showCard, setShowCard] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [upiId, setUpiId] = useState("");
  

  const totalItems = cart.reduce(
    (total, item) => total + Number(item.quantity || 1),
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  const paymentMethods = [
    { name: "Credit / Debit card", icon: "💳" },
    { name: "UPI", icon: "📱" },
    { name: "Net Banking", icon: "🏦" },
    { name: "Pay On Delivery", icon: "💵" },
  ];

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method");
      return;
    }

    if (method === "Credit / Debit card" && !cardNumber.trim()) {
      alert("Please enter your card number");
      return;
    }

    if (method === "UPI" && !upiId.trim()) {
      alert("Please enter your UPI ID");
      return;
    }

    if (totalItems === 0) {
      alert("Your cart is empty");
      return;
    }

    alert(
      `Order placed successfully!\nPayment: ${method}\nTotal: ₹${totalPrice}`
    );

    if (setShowPayment) {
      setShowPayment(false);
    }
  };

  return (
    <div className="payment-overlay">
      <div className="payment-panel">

        <button
          className="payment-close"
          onClick={() => setShowPayment && setShowPayment(false)}
        >
          ×
        </button>

        <h1>Select a payment method</h1>
        <p className="payment-subtitle">
          Help us ensure a smooth delivery
        </p>

        <div className="payment-options">
          {paymentMethods.map((item) => (
            <div
              className={`payment-option ${
                method === item.name ? "selected-payment" : ""
              }`}
              key={item.name}
              onClick={() => {
                setMethod(item.name);
                setShowCard(
                  item.name === "Credit / Debit card" ||
                  item.name === "UPI"
                );
              }}
            >
              <span className="payment-icon">{item.icon}</span>

              <div className="payment-details">
                <h3>{item.name}</h3>
<Link to="/Credit"> 
                {item.name === "Credit / Debit card" && (
                  <p>Extra discounts available on ICICI Bank Credit Cards On Orders Above ₹2500. </p>
                )}</Link>
<Link to="">  {item.name === "UPI" && (
                  <p>Google Pay, PhonePe, Paytm and more</p>
                )}
                </Link>
               
<Link to="">   {item.name === "Net Banking" && (
                  <p>Pay using your bank account</p>
                )}
                </Link>
              
<Link to="">  {item.name === "Pay On Delivery" && (
                  <p> Additional Rs.₹29 on pay on delivery.Pay when your order arrives</p>
                )}
                </Link>
              
              </div>

              <span className="payment-arrow">
                {method === item.name ? "✓" : "›"}
              </span>
            </div>
          ))}
        </div>

        {showCard && method === "Credit / Debit card" && (
          <input
            className="payment-input"
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={19}
          />
        )}

        {showCard && method === "UPI" && (
          <input
            className="payment-input"
            type="text"
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        )}

        <div className="payment-summary">
          <p>Total items: <b>{totalItems}</b></p>
          <p>Total amount: <b>₹{totalPrice}</b></p>
        </div>

        <button className="place-order-btn" onClick={handlePayment}>
          Place Order · ₹{totalPrice}
        </button>

      </div>
    </div>
  );
}

export default Order;