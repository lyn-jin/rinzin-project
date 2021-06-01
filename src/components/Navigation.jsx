import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-ul">
            <ul class="list-unstyled navbar-nav justify-content-center">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Leave Form
                  <span class="sr-only"></span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/employee" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/employee">
                  Employee List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);