import React, { Component } from "react";
import { Link } from "react-router-dom";

// comp
import "./BlogCards.css";
// img
import img1 from "./BlogCardsimage/1.webp";
import img2 from "./BlogCardsimage/2.webp";
import img3 from "./BlogCardsimage/3.webp";

export class BlogCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          url: img1,
          Link: "food news",
          date: "2020/10/17",
          p: "Adama kind deep gatherin first over fter his great",
          btn: "read more",
        },
        {
          url: img2,
          Link: "food news",
          date: "2020/10/17",
          p: "Adama kind deep gatherin first over fter his great",
          btn: "read more",
        },
        {
          url: img3,
          Link: "food news",
          date: "2020/10/17",
          p: "Adama kind deep gatherin first over fter his great",
          btn: "read more",
        },
      ],
    };
  }

  render() {
    const { cards } = this.state;
    const CardBlog = cards.map((card, ind) => {
      return (
      <div className="cardsss" key={ind}>
        <div className="card">
          <img className="card-img-top" src={card.url} alt="Card image cap" />
          <div className="card-body">
            <Link to="/" className="card-title date">
              {card.date}
            </Link>
            <Link to="/" className="card-text morenews">
              {card.Link} <i className="bi bi-arrow-bar-right"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-bar-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
                />
              </svg>
            </Link>

            <p className="card-text">{card.p}</p>
            <button type="btn">{card.btn}</button>
          </div>
        </div>
      </div>
    );
    });
    return (
      <div>
        <section className="BlogCards" id="blogcard">
          <div className="container">
            <div className="row">
              <h4>Recent News</h4>
              <h1>Latest From Blog</h1>

              <div className="cards">{CardBlog}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BlogCards;
