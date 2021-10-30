import React, { Component } from "react";
// css
import "./History.css";
// img
import img1 from "./avokad.png";

export class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep abundantly bearing, him, gathering you blessed bearing he our position best ticket in month hole deep",
    };
  }
  render() {
    return (
      <div>
        <section className="History">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={img1} />
              </div>
              <div className="col-lg-6 text" id="text">
                <h5>Our History</h5>
                <h1>Where The Food’s As Good As The Root Beer.</h1>
                <h3>Satisfying people hunger for simple pleasures</h3>
                <p>{this.state.text}</p>
                <div className="btn">read more </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default History;
