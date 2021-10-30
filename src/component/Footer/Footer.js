import React, { Component } from "react";
// comp
import "./Footer.css";
// img
import img1 from "./footerImage/1999.png";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className=" py-5">
            <div className="row py-4">
              <div className="col-lg-4 col-md-6 mb-4 logo ">
                <h1 className="mb-4">
                  code/ <span>Mu.</span>
                </h1>
                <p className="font-italic  text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  Company
                </h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="#">Q/A</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">services</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">projects</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Our Blog</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  Company
                </h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="#">Login</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Register</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Wishlist</a>
                  </li>
                  <li className="mb-2">
                    <a href="#">Our Products</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  Newsletter
                </h6>
                <p className="text-muted mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.At
                  itaque temporibus.
                </p>
                <div className="p-1 rounded border">
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      aria-describedby="button-addon1"
                      className="form-control border-0 shadow-0"
                    />
                    <div className="input-group-append">
                      <button
                        id="button-addon1"
                        type="submit"
                        className="btn btn-link"
                      >
                        <i className="bi bi-search"></i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright"></div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={img1} />
        </div>
      </footer>
    );
  }
}

export default Footer;
