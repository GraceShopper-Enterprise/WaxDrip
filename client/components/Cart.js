import React from "react";
import { connect } from "react-redux";
import { fetchUserCart } from "../store/singleOrder";
import { fetchSingleOrderEmotionData } from "../store/singleOrderEmotionData";

export class UserCart extends React.Component {
  componentDidMount() {
    try {
      const userId = this.props.UserId;
      const OrderEmotionData = this.props.userCart.id;
      this.props.loadUserCart(userId);
      this.props.loadSingleOrderEmotionData(userId);
    } catch (error) {}
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Your Cart</h1>

        {this.props.orderEmotionData.map((emotionData) => (
          <div key={emotionData.orderId}>
            <h2> Emotion Quanitiy {emotionData.emotionQuantity}</h2>
            <h2> Emotion Price{emotionData.emotionPriceInOrder}</h2>
            <h2> Emotion Id{emotionData.emotionId}</h2>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userCart: state.singleOrder,
    orderEmotionData: state.singleOrderEmotionData,
    UserId: state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadUserCart: (id) => dispatch(fetchUserCart(id)),
    loadSingleOrderEmotionData: (id) =>
      dispatch(fetchSingleOrderEmotionData(id)),
  };
};
export default connect(mapStateToProps, mapDispatch)(UserCart);
