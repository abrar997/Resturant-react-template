import React, { Component } from "react";
import Buttons from "./Buttons/Buttons";
// comp
import "./Menu.css";
import Offers from "../Offers/Offers";
import Footer from "../Footer/Footer";
import Loggg from "../Logggg/Loggg";
// img
import img1 from "./MenuImages/1.jpg";
import Special from "./Special/Special";


export class Menu extends Component {
  render() {
    return (
      <div>
        <section className="menu">
          <div className="container">
            <div className="row">
              <div className="first">
                <div className="text col-lg-6">
                  <p>Popular Menu</p>
                  <h1>Delicious Food Menu</h1>
                </div>
                <div className="images">
                  <img src={img1} />
                </div>
              </div>
              {/* new componet */}
              <Buttons />
            </div>
          </div>
          {/* other components */}
          <Special />
          <Loggg />
          <Offers />
          <Footer />
        </section>
      </div>
    );
  }
}

export default Menu;
