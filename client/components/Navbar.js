import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <h1>FS-App-Template</h1>
    <nav>
      {isLoggedIn ? (
        <span>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">My Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/users/cart">My Cart</Link>
        </span>
      ) : (
        <span>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </span>
      )}
      <Link to="/emotions">See All Emotions</Link>
      {isAdmin ? (
        <span>
          <p> You are an Admin, can edit products </p>
        </span>
      ) : (
        <span>
          <p> You are NOT an Admin </p>
        </span>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isAdmin: state.auth.type === "siteAdmin",
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
