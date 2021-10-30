import React, { Component } from "react";
import BlogCards from "../BlogCards/BlogCards";
import Customer from "../Customer/Customer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import History from "../History/History";
import Items from "../Items/Items";
import Loggg from "../Logggg/Loggg";
import Offers from "../Offers/Offers";
import Reservation from "../Reservation/Reservation";

// components in home page
export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Items />
        <History />
        <Offers />
        <Reservation />
        <BlogCards />
        <Loggg />
        <Customer />
        <Footer />
      </div>
    );
  }
}

export default Home;
