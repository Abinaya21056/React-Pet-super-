import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const navigate = useNavigate();

  const requestOTP = () => {
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    if (phone.length !== 10) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }

    setShowOTP(true);
    alert(" Your OTP Is 287493 sent successfully!");
  };

  const verifyOTP = () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6 digit OTP");
      return;
    }

    // Already registered person's details
    const savedName = localStorage.getItem("userName");
    const savedPhone = localStorage.getItem("phone");

    // FIRST PERSON - account create
    if (!savedName && !savedPhone) {
      localStorage.setItem("userName", name);
      localStorage.setItem("phone", phone);
      localStorage.setItem("isLoggedIn", "true");

      alert("Account created and Login successful! 🎉");
      navigate("/Contact");
      return;
    }

    // SAME PERSON - login allowed
    if (name === savedName && phone === savedPhone) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful! ✅");
      navigate("/Home");
      return;
    }

    // DIFFERENT PERSON - login not allowed
    alert("Only the registered user can login! ❌");
  };

  return (
    <div className="login-container">

      <h2>Login with OTP</h2>

      <p className="subtitle">
        Enter your login details 
      </p>

      {/* Name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="off"
      />

      {/* Phone */}
      <div className="phone-box">
        <span className="flag">🇮🇳</span>

        <input
          type="text"
          placeholder="Phone number"
          maxLength="10"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="off"
        />
      </div>

      {/* Request OTP */}
      <button
        className="otp-btn"
        onClick={requestOTP}
      >
        Request OTP →
      </button>

      <div className="or">
        <span></span>
        <p>Or Login Using</p>
        <span></span>
      </div>

      <button className="whatsapp-btn">
        ◉ WhatsApp
      </button>

      <p className="terms">
        I accept that I have read & understood
        <br />
        <u>Privacy Policy</u> and <u>T&Cs.</u>
      </p>

      {/* OTP Section */}
      {showOTP && (
        <div className="otp-section">

          <input
            type="text"
            placeholder="Enter OTP"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            autoComplete="off"
          />

          <button
            id="verify_otp"
            onClick={verifyOTP}
          >
            Verify 
          </button>

        </div>
      )}

    </div>
  );
}

export default Login;
