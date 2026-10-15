import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from './Home';
import './Home.css';
import Dog from './Dog';
import './Dog.css';
import Address from'./Address';
import './Address.css';
import Credit from './Credit';
import './Credit.css';
import Review from './Review';
import './Review.css';
import Dogfood  from'./Dogfood';
import './Dogfood.css';
import Cat from'./Cat';
import'./Cat.css';
import Order from './Order';
import './Order.css';
import Login from './Login';
import './Login.css';
import Cartpage from './Cartpage'
import'./Cartpage.css';
import Contact from "./Contact";
import './Contact.css';
import Account from './Account';
import './Account.css';
import { useEffect } from "react";
import $ from "jquery";
import './App.css';
function App(){
    const [cart, setCart] = useState([]);
  useEffect(() => {
  $("#nav2").hide(); // Initially hide

  $("#p").click(function () {
    $("#nav2").show(); // Show/Hide with animation
  });
}, []);

  return(
  <BrowserRouter>
    <ul id="nav">
      <p id="p"><i class="fa-brands fa-buffer" id="i"></i></p>
        <h1><i class="fa-solid fa-paw" ></i>Pet SuperTails</h1>
       
       <input type="text" placeholder="search the pet food " />
    
       <input type="text" placeholder="Select location"/>
    <li><Link to="/Home"><i class="fa-solid fa-house"></i></Link></li>
    <li><Link to="/Account"><i class="fa-solid fa-truck"></i></Link></li>
    <li><Link to="/Contact"><i class="fa-solid fa-phone"></i></Link></li>
    <li><Link to="/Login"><i class="fa-solid fa-user"></i></Link></li> 
    <li><Link to="/Cart"><i class="fa-solid fa-cart-shopping"></i></Link></li>
    </ul>
    
    <ul id="nav2">
      <li className="A cat-menu">
  <span className="cat-title">Cats ▾</span>

  <div className="cat-drop" >

    <div>
      <h3>CAT FOOD</h3> 
      <p>Dry Food</p>
      <p>Wet Food</p>
      <p>Kitten Food</p>
      <p>Premium Food</p>

      <h3>CAT TREATS</h3>
      <p>Creamy Treats</p>
      <p>Jerky Treats</p>
      <p>Crunchy Treats</p>
      <p>Healthy Treats</p>
      <p>Training Treats</p>
    </div>

    <div>
      <h3>CAT LITTER SUPPLIES</h3>
      <p>Litter</p>
      <p>Litter Boxes & Toilets</p>
      <p>Cleaning & Deodorizers</p>
      <p>Scooper & Waste Disposal</p>
      <p>Scented Litter</p>
      <p>Unscented Litter</p>
      <p>Flushable Litter</p>
      <p>Scoopy Cat Litter</p>
    </div>

  </div>
</li>
      <li className="A"> <Link to="/">Dogs</Link></li>
      <li className="A"> <Link to="/">Small Pet</Link></li>
      <li className="A"> <Link to="/">Pet Parent</Link></li>
      <li className="A"> <Link to="/">Henlo</Link></li>
      <li className="A"> <Link to="/">Pharmacy</Link></li>
      <li className="A"> <Link to="/">Shop By Breed</Link></li>
      <li className="A"> <Link to="/">Consult a Vet</Link></li>
      <li className="A"> <Link to="/">Pet SuperTails Clinic</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/Home" element={<Home/>} />
     <Route path="/dog" element={<Dog/>} />
     <Route path="/cat" element={<Cat/>} />
     <Route path="/account"element={<Account/>}/>
     <Route path="/contact"element={<Contact/>}/>
     <Route path="/dogfood"element={<Dogfood cart={cart} setCart={setCart} />}/>
     <Route path="/Login"element={<Login/>}/>
     <Route path="/Order"element={<Order cart={cart} setCart={setCart} />}/>
     <Route path="/Address"element={<Address cart={cart} setCart={setCart}/>}/>
     <Route path="/Cart"element={<Cartpage  cart={cart}setCart={setCart}/>}/>
      <Route path="/review"element={<Review cart={cart} setCart={setCart}/>}/>
 <Route path="/credit"element={<Credit/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;