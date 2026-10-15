import React, { useState } from "react";
import "./Address.css";
import { useNavigate,useLocation } from "react-router-dom";
import{Link} from "react-router-dom";

function Address({ cart =[],setCart}) {
  const navigate = useNavigate();
    const userName=localStorage.getItem("userName");
    const phone=localStorage.getItem("phone")
  const [address, setAddress] = useState({
    house: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });
  const location =useLocation();
  const steps=[
       { name: "Cart", path: "/Cart", icon: "fa-cart-shopping" },
    { name: "Address", path: "/Address", icon: "fa-address-card" },
    { name: "Review", path: "/Review", icon: "fa-folder-open" },
    { name: "Payment", path: "/Order", icon: "fa-hand-holding-dollar" }
  ];
  const currentStep = steps.findIndex(
  (step) => step.path.toLowerCase() === location.pathname.toLowerCase()
  );
  console.log("Current Path:", location.pathname);
console.log("Current Step:", currentStep);
  // order summary
  const totalPrice=cart.reduce(
    (total,item)=>
      total+item.price*item.quantity,0
  );
  const totalItems=cart.reduce(
    (total,item)=>
      total+item.quantity,0
  );
//  order summary function is end
  const [savedAddress, setSavedAddress] = useState(
    JSON.parse(localStorage.getItem("savedAddress")) || null
  );

  const [isEditing, setIsEditing] = useState(
    !localStorage.getItem("savedAddress")
  );

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  // Get current location
  const getLiveAddress = () => {
    if (!navigator.geolocation) {
      alert("Your browser does not support location.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`,
            {
              headers: {
                Accept: "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to get address");
          }

          const data = await response.json();
          const location = data.address || {};

          setAddress((prev) => ({
            ...prev,
            house:
              location.house_number ||
              location.building ||
              "",
            street:
              location.road ||
              location.neighbourhood ||
              location.suburb ||
              "",
            city:
              location.city ||
              location.town ||
              location.village ||
              "",
            state: location.state || "",
            pincode: location.postcode || "",
          }));

          alert("Current address added successfully!");
        } catch (error) {
          console.error("Address error:", error);
          alert("Unable to get address from current location.");
        }

        setLoading(false);
      },

      (error) => {
        setLoading(false);

        if (error.code === 1) {
          alert("Please allow location permission.");
        } else if (error.code === 2) {
          alert("Location information is unavailable.");
        } else if (error.code === 3) {
          alert("Location request timed out.");
        } else {
          alert("Unable to get your current location.");
        }
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  // Save address
  const handleSave = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "savedAddress",
      JSON.stringify(address)
    );

    setSavedAddress(address);
    setIsEditing(false);

    alert("Address saved successfully!");
  };

  // Edit saved address
  const handleEdit = () => {
    setAddress(savedAddress);
    setIsEditing(true);
  };

  return (
    <div id="address-s">
    <div id="cart-t">
      {steps.map((step, index) => (
        <React.Fragment key={step.name}>
          <Link
            to={step.path}
            className={`step ${
              index <currentStep ? "completed" : ""
            } ${index === currentStep ? "active" : ""}`}
          >
            <span className="step-icon">
              {index <currentStep ? (
                "✓"
              ) : (
                <i className={`fa-solid ${step.icon}`}></i>
              )}
            </span>
    
            <p>{step.name}</p>
          </Link>
    
          {index < steps.length - 1 && (
            <div
              className={`step-line ${
                index <currentStep ? "completed-line" : ""
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
    <div className="address-page">

      <h1>Select Address</h1>

      {/* Address Form */}
      {isEditing && (
        <>
          <button
            type="button"
            className="location"
            onClick={getLiveAddress}
            disabled={loading}
          >
            {loading
              ? "Getting Current Address..."
              : "📍 Use My Current Location"}
          </button>

          <form
            onSubmit={handleSave}
            className="address-form"
          >
            <input
              type="text"
              name="house"
              placeholder="House / Flat / Door No"
              value={address.house}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="street"
              placeholder="Street / Area"
              value={address.street}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Save Address
            </button>
          </form>
        </>
      )}

      {/* Saved Address */}
      {!isEditing && savedAddress && (
        <div className="saved-address">

          <h2>{userName}</h2>
           <div id="def" > <p >DEFAULT</p></div>
          <p>
            {savedAddress.house}, {savedAddress.street}
          </p>

          <p>
            {savedAddress.city}, {savedAddress.state}
          </p>

          <p>
            {savedAddress.pincode}
          </p>
<p >+91-{phone} </p>

          <button
            type="button"
            onClick={handleEdit}
          >
            Edit
          </button>

        </div>
      )}
      {/* Order Summary */}
<div className="address-order-summary">

  <h2>Order Summary</h2>

  {cart.map((item) => (
    <div
      className="address-summary-item"
      key={item.id}
    >
      <div>
        <strong>{item.name}</strong>
        <p>
          ₹{item.price} × {item.quantity}
        </p>
      </div>

      <span>
        ₹{item.price * item.quantity}
      </span>
    </div>
  ))}

  <hr />

  <div className="summary-row">
    <span>Items</span>
    <span>{totalItems}</span>
  </div>

  <div className="summary-row">
    <span>Subtotal</span>
    <span>₹{totalPrice}</span>
  </div>

  <div className="summary-row">
    <span>Delivery</span>
    <span>Free</span>
  </div>

  <hr />

  <div className="total-row">
    <span>Total</span>
    <strong>₹{totalPrice}</strong>
  </div>
<button
  className="checkout-btn"
 onClick={()=> navigate("/Review")}
>
  Proceed to Checkout
</button>
</div>

    </div>
    </div>
  );
}

export default Address;