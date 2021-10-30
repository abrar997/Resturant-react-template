import React from "react";
// import Contact from "../Contact/Contact";
// import Home from "../Home/Home";
// import Menu from "../Menu/Menu";
// import Chefs from "../Chefs/Chefs";
import { Container } from "reactstrap";
// import { Switch, Route } from "react-router";
import { NavLink, Link, BrowserRouter } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom'
import "./NavBar.css";
const NAvBar = () => {
  return (
    <>
      <BrowserRouter>
        <section className="navBar">
          <Container className="container">
            <nav className="navbar navbar-expand-lg ">
              <NavLink className="navbar-brand" to="/">
                code <span> /Mu. </span>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/Home">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Menu">
                      Menu
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Chefs">
                      chefs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Contact">
                      contact
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="/"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown link
                    </NavLink>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link className="dropdown-item" to="/">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Another action
                      </Link>
                      <Link className="dropdown-item" to="/">
                        Something else here
                      </Link>
                    </div>
                  </li>
                  <div className="btn">book a table </div>
                </ul>
              </div>
            </nav>
          </Container>
        </section>

        {/* <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Home" component={Home} exact />
                <Route path="/Menu" component={Menu} exact />
                <Route path="/Chefs" component={Chefs} exact />
                <Route path="/Contact" component={Contact} exact />
            </Switch>   */}
      </BrowserRouter>
    </>
  );
};

export default NAvBar;
