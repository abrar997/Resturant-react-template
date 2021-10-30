import React, { Component } from "react";
import Salad from "./Salad/Salad";
import "./Special.css";
export class Special extends Component {
  render() {
    return (
      <>
        <section className="Special">
          <div className="container">
            <div className="row">
              <p>Popular Menu</p>
              <h1>DELICIOUS FOOD MENU </h1>
              <div className="d-flex ">
                  <Salad />
                  <Salad />
                  <Salad />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Special;
