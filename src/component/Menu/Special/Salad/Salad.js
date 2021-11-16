import React, { Component } from "react";
import "./Salad.css";
// img
import img1 from "./Saladimage/sa1.jpg";
import img2 from "./Saladimage/sa2.jpg";
import img3 from "./Saladimage/sa3.jpg";
import img4 from "./Saladimage/sa4.jpg";

class Salad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: img1,
      name: "fresh organic salad",
      price: "$5",
    };
  }
    click1 = () => {
      this.setState({
        imgurl: img2,
        name: "fresh organic salad",
        price: "$5",
      });
    };
    click2 = () => {
      this.setState({
        imgurl: img3,
        name: "vegtables and eggs salad",
        price: "$3",
      });
    };
    click3 = () => {
      this.setState({
        imgurl: img4,
        name: "avokado salad",
        price: "$8",
      });
    };

  render() {
    return (
      <>
        <section className="salad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 image">
                <img src={this.state.imgurl} />
                <h3>{this.state.name} </h3>
                <p> {this.state.price}</p>
              </div>
              <div className="col-lg-6 buttons mt-4">
                <button onClick={this.click1}>
                  <img src={img2} />
                </button>
                <button onClick={this.click2}>
                  <img src={img3} />
                </button>
                <button onClick={this.click3}>
                  <img src={img4} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Salad;
