import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <div className="container" style={{ marginTop: "2%" }}>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="button is-primary" to={"/"}>
          Home
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/products">
            Products
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Reviews</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/review">
                Add review
              </Link>
              <Link className="navbar-item" to="/">
                View all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Menu;
