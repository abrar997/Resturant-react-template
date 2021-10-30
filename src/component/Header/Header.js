import React, { Component } from "react";
import "./Header.css";
// images
import img1 from "./image/bharat.webp";
import img2 from "./image/beef.webp";

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <section>
            <div className="iamgess">
              <img src={img2} />
            </div>
            <div className="container">
              <div className="row">
              <div className="HeaderText">
                <h5>Expensive But The Best</h5>
                <h1>Deliciousness jumping into the mouth</h1>
                <p>
                  Together creeping heaven upon third dominion be upon won't
                  darkness <br /> rule land behold it created good saw after
                  she'd Our set living. <br /> Signs midst dominion creepeth
                  morning
                </p>
                <div className="btn">
                  reservation
                  <div className="arrow bounce">
                    <i className="bi bi-chevron-double-right"></i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-double-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                </div>

                  <div className="images">
                    <img src={img1} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
    );
  }
}

export default Header;
