import React, { Component } from "react";
// comp
import "./Offers.css";
// axios
import axios from "axios";
// img
import img1 from "./OffersImages/salad1.png";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
    };
  }

  componentDidMount() {
    axios.get("food.json").then((res) => {
      console.log(res.data);
      this.setState({ offers: res.data.offers }); //never foreget res.data.offers
    });
  }

  render() {
    const { offers } = this.state; //never forget {}
    const dataFood = offers.map((offer, ind) => {
      return (
        <div key={ind}>
          {/* //never foreget return */}
          <Card className="card col-lg-6">
            <CardBody>
              <CardTitle tag="h2">{offer.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
            </CardBody>
            <img width="100%" src={offer.url} alt="Card image cap" />
            <CardBody>
              <CardText tag="p">{offer.text}</CardText>
              <Button>{offer.order}</Button>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <section className="offers">
          {" "}
          <div className="imageSalad1">
            <img src={img1} />
          </div>
          <div className="container">
            <div className="row">
              <h1>SPECIAL OFFERS</h1>

              <div className="cardoffer">{dataFood}</div>
            </div>{" "}
          </div>
        </section>
      </div>
    );
  }
}

export default Offers;
