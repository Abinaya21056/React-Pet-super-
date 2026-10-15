import React from 'react';
import {useState} from 'react';
function Credit(){
    const [active,setActive]=useState("");
return(
<div id="credit-all">
<div id="offers"  >
    <img id="emoji" src="/image/em1.jpeg" alt="" width="40px"  />
    <p onClick={()=>setActive("Offers")} id="off-link">Offers</p>
    {active==="Offers"&&(
        <div id="credit-cou">
            <h4 id="coupon-title">Coupons for you <i class="fa-solid fa-heart" id="heart-icon"></i></h4>
            <p id="ic"> <img src="image/ibn.png" alt="" width="30px" /> ICICI</p>
            <p id="cou-dis">Additional 6% off upto ₹125 on orders above ₹2500 on selected ICICI credit cards + T&C You will save ₹125.0 with this code</p>
        </div>
    )}
</div>
<div id="credit-debit">

</div>
</div>
)
}
export default Credit;