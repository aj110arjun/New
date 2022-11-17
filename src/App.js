import React from "react";
import Helmet from "react-helmet"
import './App.css';
import findtrend from "./components/images/findtrend.svg";
import fire from "./components/images/fire.svg";
import arrowText from "./components/images/arrowithtext.svg";
import twitter from "./components/images/twitter-search bar.svg";
import pintrest from "./components/images/pintrest.svg";
import cross from "./components/images/cross.svg";
import facebook from "./components/images/facebook.svg";
import dribble from "./components/images/dribble.svg";
import algolia from "./components/images/algolia.png";
import grab from "./components/images/grab.svg";
import google from "./components/images/google.svg";
import volvo from "./components/images/volvo.png";
import coinbase from "./components/images/coinbase.png";
import upwork from "./components/images/upwork.png";
import porsche from "./components/images/porsche.svg";
import git from "./components/images/git.svg";
import m from "./components/images/m.svg";
import linkedin from "./components/images/linkedin.svg";
import vk from "./components/images/vk.svg";
import twitter2 from "./components/images/twitter.svg";
import page1 from "./components/images/page1.jpg";
import page2 from "./components/images/page2.jpg";
import slide from "./components/images/switch.png";
import tick from "./components/images/tick-icon.svg";
import findtrend2 from "./components/images/logo.png";


function App() {
  
  return (
    <>
    <Helmet>
      <title>FindTrend</title>
    </Helmet>
    <section id="one">
        <section className="header">

            <div className="left">
              <img src={findtrend} alt="logo" />
            </div>

            <div className="middle">
                <a href="">About</a>
                <a href="">How it work</a>
                <a href="">Pricing</a>
                <a href="">Solution</a>
                <a href="">Features</a>
            </div>

            <div className="right">
              <a href="">Login</a>
              <a href="" className="button">Register</a>
            </div>

        </section>{/* ( #one > .header ) */}

        <section className="home">
            
                <h1>Minimize your tabs.Find your trends!</h1>
                <p>Maecenas dignissim justo egnet nulia rutrum moleestie. Maecenaslobortis sem<br/>dui, vel rutrum risus tincidunt ullamcorper.Proin eu enim metus.</p>
                <div>
                  <a>Get Started <img src={fire} alt="fire" /> </a>
                  <img src={arrowText} alt="arrowithtext" className="arrow" />
                </div>
              
        </section>{/* ( #one > .home ) */}
        <section className="home2">
                <img src={twitter} alt="ad" />

                <div>
                  <img src={pintrest} alt="pintrest" />
                  <p>Popular design - Search</p>
                  <img src={cross} alt="cross" className="cross" />
                </div>

                <div>
                  <img src={facebook} alt="facebook" />
                  <p>Popular design - Search</p>
                  <img src={cross} alt="cross" className="cross" />
                </div>

                <div>
                  <img src={dribble} alt="dribble" />
                  <p>Elon Musk - Search</p>
                  <img src={cross} alt="cross" className="cross" />
                </div>

        </section>{/* ( #one > .home2) */}
    </section>{/*  ( #one ) */}

    <section id="two">
        <section className="main">
          <h1>Open new tab is sh*t</h1>
          <div>
            <img src={twitter} alt="image" />
            <img src={arrowText} alt="arrow" className="arrow" />
          </div>
          <p>Maecenas dignissim justo egnet nulia rutrum moleestie. Maecenaslobortis sem<br/>
dui, vel rutrum risus tincidunt ullamcorper.Proin eu enim metus.</p>
        </section>{/* ( #two > .main) */}
    </section>{/* ( #two ) */}

    <section id="three">
      <section className="companies">
          <h1>Findtrend helps you to increase your<br />
             productivityand reduce your computer's<br />
             memory load,<b>an application that can<br />
              fulfil you daily browsing needs</b>
          </h1>
          <h1 className="edit">Findtrend make +1000 startup grow</h1>
          <div>
            <img src={google} alt="google" />
            <img src={porsche} alt="porsche" />
            <img src={algolia} alt="algolia" />
            <img src={volvo} alt="volvo" />
            <img src={algolia} alt="algolia" />
            <img src={volvo} alt="volvo" />
            <img src={grab} alt="grab" />
            <img src={porsche} alt="porsche" />
            <img src={volvo} alt="volvo" />
            <img src={upwork} alt="upwork" />
            <img src={coinbase} alt="coinbase" />
            <img src={volvo} alt="volvo" />
            <img src={porsche} alt="porsche" />
            <img src={google} alt="algolia" />
            <img src={grab} alt="grab" />
            <img src={algolia} alt="algolia" />
          </div>
      </section>{ /*( #three > .companies )*/}
    </section>{/*( #three )*/}

    <section id="four">
      <section className="tweet">
        <h1>All platform connect to Findtrend</h1>
        <ul>

          <li>
            <img src={facebook} alt="facebook" />
          </li>

          <li>
            <img src={twitter2} alt="twitter2" />
          </li>

          <li>
            <img src={dribble} alt="dribble" />
          </li>

          <li>
            <img src={git} alt="git" />
          </li>

          <li>
            <img src={m} alt="m" />
          </li>

          <li>
            <img src={pintrest} alt="pintrest" />
          </li>

          <li>
            <img src={linkedin} alt="linkedin" />
          </li>

          <li>
            <img src={vk} alt="vk" />
          </li>

        </ul>
        <div>
          <img src={page1} alt="page" />
          <img src={page2} alt="page" />
          <img src={page1} alt="page" />
        </div>
        
          <button>Register</button>
        
      </section>{/*( #four > .tweet )*/}
    </section>{/*( #four )*/}

    <section id="five">
      <section className="price">

        <h1>Get your best deal</h1>
        <div className="a">
          <p>Maecenasi</p>
          <img src={slide} alt="slide" />
          <p className="edit">Maecenasi</p>
          <img src={arrowText} alt="arrowText" />
        </div>

        <section className="fees">
          <div className="price">
            <h1>Personal</h1>
            <p>Vivamus sed libero ornare</p>

            <div className="align">
              <h1>$8</h1>
              <p>/ month</p>
            </div>
            <ul>
              <li>
                <img src={tick} alt="tick" />
                <p>Vivamus sed libero ornare</p>
              </li>
              <li>
                <img src={tick} alt="tick" />
                <p>Rivamus sed libero </p>
              </li>
              <li>
                <img src={tick} alt="tick" />
                <p>Tivamus sed libero ornare</p>
              </li>
            </ul>
            <button className="button">For Free</button>
          </div>


          <div className="price-1">
            <h1>Personal</h1>
            <p>Vivamus sed libero ornare</p>

            <div className="align">
              <h1>$20</h1>
              <p>/ month</p>
            </div>
            <ul>
              <li>
                <img src={tick} alt="tick" />
                <p>Vivamus sed libero ornare</p>
              </li>
              <li>
                <img src={tick} alt="tick" />
                <p>Rivamus sed libero </p>
              </li>
              <li>
                <img src={tick} alt="tick" />
                <p>Tivamus sed libero ornare</p>
              </li>
            </ul>
            <button className="button">For Free</button>
          </div>


          <div className="price">
            <h1>Personal</h1>
            <p>Vivamus sed libero ornare</p>

            <div className="align">
              <h1>$48</h1>
              <p>/ month</p>
            </div>
            <ul>
              <li>
                <img src={tick} alt="tick" />
                <p>Vivamus sed libero ornare</p>
              </li>
              <li>
                <img src={tick} alt="tick" />
                <p>Rivamus sed libero </p>
              </li>
              <li>
                <img src={tick} alt="tick" />
                <p>Tivamus sed libero ornare</p>
              </li>
            </ul>
            <button className="button">For Free</button>
          </div>
        </section>{/*( #five > .price > .fees )*/}
      </section>{/*( #five > .price )*/}
    </section>{/*( #five )*/}

    <section id="six">
      <section className="about">
          <h2>Join us on email for</h2>
          <h3>more trending topics</h3>
          <button>Register</button>
      </section>{/*( #six > .about )*/}
    </section>{/*( #six )*/}

    <section id="seven">
      <section className="footer">

        <div className="left">
          <img src={findtrend2} alt="findtrend2" />
        </div>

        <div className="right">
          <a href="">How it work ?</a>
          <a href="">Pricing</a>
          <a href="">Solutions</a>
          <a href="">Features</a>
        </div>

      </section>{/*( #seven > .footer )*/}
    </section>{/*( #seven )*/}
      
  </>
  )
}

export default App;
