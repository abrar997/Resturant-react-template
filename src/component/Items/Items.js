import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import "./Items.css";

// images
import img1 from "./Itemsimages/brg.png";
import img2 from "./Itemsimages/node.png";
import img3 from "./Itemsimages/beef.png";
import img4 from "./Itemsimages/salad.png";

export class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        {
          imgUrl: img1,
          name: "Indian Burger",
          text: "Was brean shed moveth day yielding tree yielding day were female and",
          btn: "read more",
        },
        {
          imgUrl: img2,
          name: "Cremy Noodles",
          text: "Was brean shed moveth day yielding tree yielding day were female and",
          btn: "read more",
        },
        {
          imgUrl: img3,
          name: "Honey Meat",
          text: "Was brean shed moveth day yielding tree yielding day were female and",
          btn: "read more",
        },
      ],
    };
  }

  render() {
    const food = this.state.food;
    const foods = food.map((food, ind) => {
      return (
        <div key={ind} className="card">
          <Card>
            <CardImg top width="100%" src={food.imgUrl} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{food.name} </CardTitle>

              <CardText>{food.text}</CardText>
              <Button>
                {food.btn}{" "}
                <div className="bounce arrow">
                  {" "}
                  <i className="bi bi-arrow-90deg-right"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-90deg-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
                    />
                  </svg>
                </div>
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <section className="items">
          <div className="container">
            <div className="row">
              <h5>Popular Dishes</h5>
              <h1>Our Exclusive Items</h1>

              <div className="cardsFood">{foods}</div>
            </div>{" "}
            <div className="imagessalad">
              <img src={img4} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Items;
