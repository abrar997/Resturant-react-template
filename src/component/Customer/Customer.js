import React, { useState } from "react";
// import images
import img from "./Customerimage/John.jpg";

import { Container } from "reactstrap";
// css file
import "./Customer.css";

// import react file from swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
// from react-starp lib

const Customer = () => {
  // hooks
  const [data, setData] = useState([
    {
      img: img,
      name: "john smith",
      say: "food is amazing and resturant services very good when u eat u feeling ypu are eat in your home ",
    },
    {
      img: img,
      name: "judy abbot",
      say: "food is amazing and resturant services very good when u eat u feeling ypu are eat in your home ",
    },
    {
      img: img,
      name: "jem meck braid",
      say: "food is amazing and resturant services very good when u eat u feeling ypu are eat in your home ",
    },
    {
      img: img,
      name: "julia bendelton",
      say: "food is amazing and resturant services very good when u eat u feeling ypu are eat in your home ",
    },
  ]);
  return (
    <div className="customer">
      <Container>
        <h1>our customer Say </h1>

        <Swiper navigation={true} className="swiper">
          {data.map((item, ind) => {
            return (
              <div key={ind}>
                <SwiperSlide className="wiper-slide ">
                  <img src={item.img} />
                  <h3>{item.name} </h3>
                  <p>{item.say} </p>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};
export default Customer;
