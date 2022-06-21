import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserCart } from "../store/singleOrder";

/**
 * COMPONENT
 */
export class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadUserCart(this.props.userId);
  }

  render() {
    const { username } = this.props;

    return (
      <div>
        <h3>Welcome, {username}</h3>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    userId: state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadUserCart: (userId) => dispatch(fetchUserCart(userId)),
  };
};

export default connect(mapState, mapDispatch)(Home);
