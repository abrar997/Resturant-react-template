import React, { Component } from "react";
import "./Logg.css";
import img1 from "./Loimage/left.png";

export class Loggg extends Component {
  render() {
    return (
      <>
        <section className="Logg">
          <div className="container">
            <div className="row">
              <div className="text ml-auto col-lg-6">
                <img src={img1} />
              </div>
              <div className="text ml-auto col-lg-6">
                <h1>do want to know our offers ? </h1>
                <p>please inter your email and enjoy with our offers </p>

                <form>
                  <input type="email" placeholder="write your email..." />
                  <button typee="button">click </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Loggg;
