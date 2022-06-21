import React from "react";
import { connect } from "react-redux";
import { fetchEmotions } from "../store/allEmotions";
import { fetchUserCart } from "../store/singleOrder";
import {
  fetchSingleOrderEmotionData,
  unassignOrderSingleEmotion,
} from "../store/singleOrderEmotionData";

export class UserCart extends React.Component {
  constructor() {
    super();

    this.removeEmotionHandler = this.removeEmotionHandler.bind(this);
  }

  componentDidMount() {
    try {
      const userId = this.props.UserId;
      this.props.loadUserCart(userId);
      this.props.getAllEmotions();
      const cartId = this.props.userCart.id;
      this.props.loadSingleOrderEmotionData(cartId);
    } catch (error) {}
  }
  removeEmotionHandler(orderId, emotionId) {
    const userId = this.props.UserId;
    const cartId = this.props.userCart.id;
    this.props.unassignOrderSingleEmotion(orderId, emotionId);
    this.props.loadSingleOrderEmotionData(cartId);
  }

  render() {
    const emotions = this.props.emotions;
    const orderEmotionData = this.props.orderEmotionData.orderId;

    return (
      <div>
        <h1>Your Cart</h1>

        {this.props.orderEmotionData.map((emotionData) => (
          <div key={emotionData.orderId}>
            <h2> Emotion Name {emotions[emotionData.emotionId - 1].name}</h2>
            <h2> Emotion Quanitiy {emotionData.emotionQuantity}</h2>
            <h2> Emotion Price{emotionData.emotionPriceInOrder}</h2>
            <h2>
              {" "}
              <img src={emotions[emotionData.emotionId - 1].imageURL} />
            </h2>
            <h2> Emotion Id{emotionData.emotionId}</h2>
            <button
              className="delete-button"
              onClick={() =>
                this.removeEmotionHandler(
                  emotionData.orderId,
                  emotionData.emotionId
                )
              }
            >
              Remove Emotion
            </button>
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
    emotions: state.emotions,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadUserCart: (userId) => dispatch(fetchUserCart(userId)),
    loadSingleOrderEmotionData: (orderId) =>
      dispatch(fetchSingleOrderEmotionData(orderId)),
    getAllEmotions: () => dispatch(fetchEmotions()),
    unassignOrderSingleEmotion: (orderId, emotionId) =>
      dispatch(unassignOrderSingleEmotion(orderId, emotionId)),
  };
};
export default connect(mapStateToProps, mapDispatch)(UserCart);
