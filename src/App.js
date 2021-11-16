import React, { Fragment } from "react";
import Contact from "./component/Contact/Contact";
import Home from "./component/Home/Home";
import Menu from "./component/Menu/Menu";
import Chefs from './component/Chefs/Chefs'
import { Container } from "reactstrap";
import { Switch, Route } from "react-router";
import { NavLink, Link, BrowserRouter } from "react-router-dom";
import "./App.css";


const App = () => {
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
                    <NavLink className="nav-link" to="/Chefs">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Contact">
                      contact
                    </NavLink>
                  </li>

                  <div className="btn">book a table </div>
                </ul>
              </div>
            </nav>
          </Container>
        </section>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Home" component={Home} exact />
          <Route path="/Menu" component={Menu} exact />
          <Route path="/Chefs" component={Chefs } exact />
          <Route path="/Contact" component={Contact} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
