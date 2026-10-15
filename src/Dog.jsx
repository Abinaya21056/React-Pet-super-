import React from "react";
import{Link} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function Dog() {
    //  const navigate = useNavigate();
    return (
        <div>
            <div>
                <img id="m" src="/image/p52.webp" alt="" width={"2000px"} />
            </div>
            {/* dogs */}
            <div id="dogs">
               
                <div>
                    <Link to="/dogfood"> <img className="dogs" src="/image/p53.png" alt="" width={"250px"} height={"250px"} />
                        </Link>
                    <p className="para">Food more</p>
                </div>
           
                <div>
                    <img className="dogs" src="/image/p54.jpg" alt="" width={"250px"} height={"250px"} />
                    <p className="para">Pharmacy</p>
                </div>
                <div>
                    <img className="dogs" src="/image/p55.webp" alt="" width={"250px"} height={"250px"} />
                    <p className="para">Pet Clinic</p>
                </div>
                <div>
                    <img className="dogs" src="/image/p56.jpg" alt="" width={"250px"} height={"250px"} />
                    <p className="para">Pet Spa</p>
                </div>
                <div>
                    <img className="dogs" src="/image/p57.webp" alt="" width={"250px"} height={"250px"} />
                    <p className="para">Fashion</p>
                </div>
                <div>
                    <img className="dogs" src="/image/p58.jpg" alt="" width={"250px"} height={"250px"} />
                    <p className="para">Toys</p>
                </div>
                <div>
                    <img className="dogs" src="/image/p59.webp" alt="" width={"200px"} height={"250px"} />
                    <p className="para">Monsoon</p>
                </div>
                <div>
                    <img className="dogs" src="/image/p60.avif" alt="" width={"250px"} height={"250px"} />
                    <p className="para">accessories</p>
                </div>
                <div>
                    <img className="dogs" src="/image/p61.jpeg" alt="" width={"250px"} height={"250px"} />
                    <p className="para">Treat</p>
                </div>
                <div>
                    <img className="dogs" src="/image/p62.webp" alt="" width={"250px"} height={"250px"} />
                    <p className="para">Grooming</p>
                </div>
            </div>
            <div>
                <img src="image/p1.webp" alt="" width={"2000px"} />
            </div>
            {/* dog food div */}
            <div id="dog">
                <div >
                    <img className="dog" src="image/bc.jpeg" alt="" width={"900px"} />
                    <p id="fresh"><b>Fresh food for your doggo</b> <br /> at best prices,best quality!</p>
                    <button id="bu" > Shop now</button>
                </div>
                <div>
                    <img className="dog" src="image/bc3.jpeg" alt="" width={"900px"} />
                    <div className="new"> drools</div>
                    <p className="title"><b>Ready to eat home cooked <br />  goodness</b></p>
                    <button className="bu">Shop now</button>
                </div>
                <div>
                    <img className="dog" src="image/bc2.jpeg" alt="" width={"900px"} />
                    <div className="new"> waggies</div>
                    <p className="title" ><b>Premium Nutrition,Every Pet's Right</b></p>
                    <button className="bu">Shop now</button>
                </div>
                <div>
                    <img className="dog" src="image/bc4.jpeg" alt="" width={"900px"} />
                    <div className="new">furst</div>
                    <p className="title"><b>Modern Meals,Throughtfully Made</b></p>
                    <button className="bu">Shop now</button>
                </div>
            </div>
            {/* Breed */}
            <h1 id="b-s">Shop by Breed</h1>
            <div id="b-breed">
                <div >
                    <img className="b-b" src="/image/p69.avif" alt="" width={"250px"} height={"300px"} />
                </div>
                <div>
                    <img className="b-b" src="/image/p63.avif" alt="" width={"250px"} height={"300px"} />
                </div>
                <div>
                    <img className="b-b" src="/image/p65.avif" alt="" width={"250px"} height={"300px"} />
                </div>
                <div>
                    <img className="b-b" src="/image/p70.avif" alt="" width={"250px"} height={"300px"} />
                </div>
                <div>
                    <img className="b-b" src="/image/p68.avif" alt="" width={"250px"} height={"300px"} />
                </div>
                <div>
                    <img className="b-b" src="/image/p64.avif" alt="" width={"250px"} height={"300px"} />
                </div>
                <div>
                    <img className="b-b" src="/image/p66.avif" alt="" width={"250px"} height={"300px"} />
                </div>
                <div>
                    <img className="b-b" src="/image/p67.avif" alt="" width={"250px"} height={"300px"} />
                </div>
            </div>
            <img src="image/p.webp" alt="" width={"2000px"} />
            {/* Food essentials */}
            <h1 id="f-od">Food essentials</h1>
            <div id="food-e">
                <div><img src="image/p71.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p72.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p73.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p74.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p75.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p76.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p77.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p78.avif" alt="" width={"220px"} /></div>
            </div>
            {/* Healthcare */}
            <h1 id="h-care"> Healthcare</h1>
            <div id="healthcare">
                <div><img src="image/p79.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p80.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p81.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p82.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p83.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p84.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p85.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p86.avif" alt="" width={"220px"} /></div>
                <div><img src="image/p87.avif" alt="" width={"220px"} /></div>
            </div>
            {/* lifestyle and accessories */}
            <h1 id="ls-aa">Life Style And Accessories</h1>
<div id="l-a">
<div><img src="image/p88.avif" alt="" width={"220px"} /></div>
<div><img src="image/p89.avif" alt="" width={"220px"} /></div>
<div><img src="image/p90.avif" alt="" width={"220px"} /></div>
<div><img src="image/p91.avif" alt="" width={"220px"} /></div>
<div><img src="image/p92.avif" alt="" width={"220px"} /></div>
<div><img src="image/p93.avif" alt="" width={"220px"} /></div>
<div><img src="image/p94.avif" alt="" width={"220px"} /></div>
<div><img src="image/p95.avif" alt="" width={"220px"} /></div>
<div><img src="image/p96.avif" alt="" width={"220px"} /></div>
<div><img src="image/p97.avif" alt="" width={"220px"} /></div>
<div><img src="image/p98.avif" alt="" width={"220px"} /></div>
<div><img src="image/p99.avif" alt="" width={"220px"} /></div>
</div>
{/* pet parent */}
<h1 id="p-p">Pet parent</h1>
<div id="pet-p">
<div><img src="image/p100.webp" alt="" width={"250px"} /></div>
<div><img src="image/p101.webp" alt="" width={"250px"} /></div>
<div><img src="image/p102.avif" alt="" width={"250px"} /></div>
<div><img src="image/p103.webp" alt="" width={"250px"} /></div>
<div><img src="image/p104.webp" alt="" width={"250px"} /></div>
<div><img src="image/p105.avif" alt="" width={"250px"} /></div>
<div><img src="image/p106.avif" alt="" width={"250px"} /></div>
</div>
{/* scroll */}
<div id="feed">
<div><img src="image/p107.webp" alt="" width={"900px"}/></div>
<div><img src="image/p108.webp" alt="" width={"900px"}/></div>
<div><img src="image/p109.webp" alt="" width={"900px"}/></div>
<div><img src="image/p120.webp" alt="" width={"900px"}/></div>
<div><img src="image/p121.webp" alt="" width={"900px"}/></div>
<div><img src="image/p122.webp" alt="" width={"900px"}/></div>
<div><img src="image/p123.webp" alt="" width={"900px"}/></div>
</div>
{/* pet monsoon */}
<img src="image/p124.webp" alt="" width={"2000px"} />
<div id="pet-mon">
<div><img src=" image/p125.avif" alt="" width={"350px"}/></div>
<div><img src=" image/p126.avif" alt="" width={"350px"}/></div>
<div><img src=" image/p127.avif" alt="" width={"350px"}/></div>
<div><img src=" image/p128.avif" alt="" width={"350px"}/></div>
<div><img src=" image/p129.avif" alt="" width={"350px"}/></div>
<div><img src=" image/p130.avif" alt="" width={"350px"}/></div>
<div><img src=" image/p131.avif" alt="" width={"350px"}/></div>
</div>
{/* henlo */}
<img id="i-m" src="image/p132.webp" alt="" width={"2000px"}/>
<div id="henlo">
<div><img src="image/p133.avif" alt="" width={"370px"} /></div>
<div><img src="image/p134.avif" alt="" width={"370px"} /></div>
<div><img src="image/p135.avif" alt="" width={"370px"} /></div>
<div><img src="image/p136.avif" alt="" width={"370px"} /></div>
<div><img src="image/p137.webp" alt="" width={"370px"} /></div>
<div><img src="image/p138.avif" alt="" width={"370px"} /></div>
</div>
<img src="image/p12.webp" alt="" width={"2000px"}/>
<div id="pet-ph">
<div><img src="image/p139.avif" alt="" width={"300px"} /></div>
<div><img src="image/p140.avif" alt="" width={"300px"} /></div>
<div><img src="image/p141.avif" alt="" width={"300px"} /></div>
<div><img src="image/p144.avif" alt="" width={"300px"} /></div>
<div><img src="image/p145.avif" alt="" width={"300px"} /></div>
<div><img src="image/p146.avif" alt="" width={"300px"} /></div>
<div><img src="image/p147.avif" alt="" width={"300px"} /></div>
<div><img src="image/p148.avif" alt="" width={"300px"} /></div>
</div>
        </div>
    )
}
export default Dog;
