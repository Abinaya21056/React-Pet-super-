import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Review({ cart = [], setCart }) {
    const navigate = useNavigate();

    const userName = localStorage.getItem("userName");
    const [active,setActive]=useState("");

    const [savedAddress, setSavedAddress] = useState(
        JSON.parse(localStorage.getItem("savedAddress")) || null
    )

    return (
        <div className="review-container">
<div id="car-t" >
           <Link>
             <p><i class="fa-solid fa-cart-shopping"></i>Cart</p>
          </Link>             
                        ________
                     <Link to={"/Address"}>
             <p><i class="fa-solid fa-address-card"></i>Address</p>
           </Link>
        
                         ________    
                        <Link> <p><i class="fa-regular fa-folder-open"></i>Review</p></Link>
                        ________
                        <Link><p><i class="fa-solid fa-hand-holding-dollar"></i>Payment</p></Link>
                     </div>
            {/* Address */}
            <div className="address-box">
                <div>
                    Delivering to <b>{userName}</b>
                </div>

                <div>
                    {savedAddress?.address || "Flat, Entry Poonamallee, Tamil Nadu 600056"}
                </div>
            </div>

            <h3 className="delivery-title">Delivery estimates</h3>

            <div className="review-content">

                {/* LEFT SIDE */}
                <div className="cart-section">

                    {cart.map((item, index) => (
                        <div className="delivery-group" key={item.id || index}>

                            {/* Delivery information */}
                            <div className="delivery-box">
                                <h3>Arriving by tomorrow 10PM</h3>
                                <p>
                                    Delivery {index + 1} of {cart.length}
                                </p>
                            </div>

                            {/* Product */}
                            <div className="product-item">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="product-image"
                                />

                                <div className="product-info">
                                    <div className="product-name">
                                        {item.name}
                                    </div>

                                    <div className="product-size">
                                        Size -
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* RIGHT SIDE - ORDER SUMMARY */}
                <div className="order-summary">

                    <h3>Order Summary</h3>

                    {cart.map((item, index) => (
                        <div className="summary-item" key={item.id || index}>
                            <div>
                                <b>{item.name}</b>
                                <br />
                                <span>
                                    ₹{item.price} × {item.quantity || 1}
                                </span>
                            </div>

                            <span>
                                ₹{item.price * (item.quantity || 1)}
                            </span>
                        </div>
                    ))}

                    <hr />

                    <div className="summary-row">
                        <span>Items</span>
                        <span>{cart.length}</span>
                    </div>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>
                            ₹
                            {cart.reduce(
                                (total, item) =>
                                    total +
                                    item.price * (item.quantity || 1),
                                0
                            )}
                        </span>
                    </div>

                    <div className="summary-row">
                        <span>Delivery</span>
                        <span>Free</span>
                    </div>

                    <hr />

                    <div className="summary-row total">
                        <span>Total</span>
                        <span>
                            ₹
                            {cart.reduce(
                                (total, item) =>
                                    total +
                                    item.price * (item.quantity || 1),
                                0
                            )}
                        </span>
                    </div>

                    <button
                        className="checkout-btn"
                        onClick={() => setActive("payment")}
                    >
                    Proceed to payment
                    {active==="payment"&&(
<div>
    <h1>Select a payment method</h1>
<p>Helps us ensure a smooth delivery</p>
{/* credit and debit card */}
<Link to="/credit"> <div>
<i class="fa-regular fa-credit-card"></i>
<h1>Credit / Debit Card</h1>
<p>Extra discounts available on ICICI Bank Credit Card On Order Above $2500</p>
</div></Link>


</div>
                    )}
                              
                        
                    </button>

                </div>

            </div>
            {/* <div id="deli-verys" >
    <div > 
    <i class="fa-solid fa-person-running"></i>
    <h2 className="hrs">24hr Devlivery</h2>
    <p className="exclusives">in 24 cities</p>
</div>
<div >
    <i class="fa-solid fa-dog"></i>
    <h2 className="hrs">1,50,000+</h2>
    <p className="exclusives">Happy pet parents</p>
</div>
<div >
    <i class="fa-solid fa-stethoscope"></i>
    <h2 className="hrs"> Comlimentary vet consult</h2>
    <p className="exclusives">For every new member</p>
</div>
<div >
    <i class="fa-solid fa-briefcase-medical"></i>
    <h2 className="hrs">Pet Pharmacy</h2>
    <p className="exclusives">Exclusive</p>
</div>
</div> */}

        </div>
    );
}

export default Review;