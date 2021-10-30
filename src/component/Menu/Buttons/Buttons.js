import React, { Component } from "react";
// comp
import "./Buttons.css";
// img
import img1 from "./ButtonsImage/mint.png";

import img2 from "./ButtonsImage/chicken.webp";
import img3 from "./ButtonsImage/easeter.webp";
import img4 from "./ButtonsImage/pork.png";
import img5 from "./ButtonsImage/roaste.png";
import img6 from "./ButtonsImage/summer.webp";
import img7 from "./ButtonsImage/tiener.png";

export class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoMenu: [
        {
          img: img2,
          name: "Pork Sandwich",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img3,
          name: "roasted marrow",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img4,
          name: "summer cooking",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img5,
          name: "easter delight",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img6,
          name: "tiener schentize",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img7,
          name: "chocke roast",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
      ],
    };
  }

  special = () => {
    this.setState({
      infoMenu: [
        {
          img: img2,
          name: "Pork Sandwich",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img3,
          name: "roasted marrow",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img4,
          name: "summer cooking",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img5,
          name: "easter delight",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img6,
          name: "tiener schentize",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img7,
          name: "chocke roast",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
      ],
    });
  };

  breafast = () => {
    this.setState({
      infoMenu: [
        {
          img: img3,
          name: "Pork Sandwich",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img6,
          name: "roasted marrow",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img4,
          name: "summer cooking",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img2,
          name: "easter delight",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img5,
          name: "tiener schentize",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img7,
          name: "chocke roast",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
      ],
    });
  };

  launch = () => {
    this.setState({
      infoMenu: [
        {
          img: img6,
          name: "Pork Sandwich",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img7,
          name: "roasted marrow",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img5,
          name: "summer cooking",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img2,
          name: "easter delight",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img3,
          name: "tiener schentize",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img4,
          name: "chocke roast",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
      ],
    });
  };

  dinner = () => {
    this.setState({
      infoMenu: [
        {
          img: img4,
          name: " roasted marrow",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img3,
          name: "Pork Sandwich",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img6,
          name: "easter delight ",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img7,
          name: "summer cooking",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img5,
          name: "chocke roast",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img2,
          name: "tiener schentize ",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
      ],
    });
  };

  sneaks = () => {
    this.setState({
      infoMenu: [
        {
          img: img4,
          name: "Pork Sandwich",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img6,
          name: "roasted marrow",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img7,
          name: "summer cooking",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img2,
          name: "easter delight",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img3,
          name: "tiener schentize",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
        {
          img: img5,
          name: "chocke roast",
          p: "They're wherein heaven seed hath nothing",
          price: "$40",
        },
      ],
    });
  };

  render() {
    const { infoMenu } = this.state;
    const listMenu = infoMenu.map((item, ind) => {
      return (
        <div className="menu" key={ind}>
          <div className="imag">
            <img src={item.img} />
          </div>
          <div className="explain">
            <h3>{item.name}</h3>
            <p>{item.p} </p>
            <h5>{item.price} </h5>
          </div>
        </div>
      );
    });
    return (
      <section className="top">
        <div className="buttons">
          <div className="cliks">
            <button type="button" onClick={this.special}>
              special
            </button>
            <button type="button" onClick={this.breafast}>
              breafast
            </button>
            <button type="button" onClick={this.launch}>
              launch
            </button>
            <button type="button" onClick={this.dinner}>
              dinner
            </button>
            <button type="button" onClick={this.sneaks}>
              sneaks
            </button>
          </div>
          <div className="mint">
            <img src={img1} />
          </div>

          <div className="container">
            <div className="row">
              <div className="cards">{listMenu}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Buttons;
