import React from "react";
import { connect } from "react-redux";
import { fetchUserCart } from "../store/singleOrder";

export class UserCart extends React.Component {
  componentDidMount() {
    try {
      const UserId = this.props.match.params.userId;
      this.props.loadUserCart(UserId);
    } catch (error) {}
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello Carts</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userCart: state.singleOrder,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadUserCart: (id) => dispatch(fetchUserCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatch)(UserCart);
