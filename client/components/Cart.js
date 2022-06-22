import React from "react";
import { connect } from "react-redux";
import { fetchEmotions } from "../store/allEmotions";
import { fetchUserCart } from "../store/singleOrder";
import {
  fetchSingleOrderEmotionData,
  unassignOrderSingleEmotion,
} from "../store/singleOrderEmotionData";
import { updateQuantity } from "../store/singleOrderEmotionData";
export class UserCart extends React.Component {
  constructor() {
    super();

    this.removeEmotionHandler = this.removeEmotionHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  componentDidUpdate(prevProps) {
    // this if statement is a infinit loop
    if (this.props !== prevProps) {
      const cartId = this.props.userCart.id;
      this.props.loadSingleOrderEmotionData(cartId);
    }
  }
  removeEmotionHandler(orderId, emotionId) {
    const userId = this.props.UserId;
    const cartId = this.props.userCart.id;
    this.props.unassignOrderSingleEmotion(orderId, emotionId);
    this.props.loadSingleOrderEmotionData(cartId);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const emotionId = event.target.id;
    const orderId = this.props.userCart.id;

    this.props.changeQuantity(orderId, emotionId, this.state.value);
  }
  render() {
    const emotions = this.props.emotions;

    return (
      <div>
        <h1>Your Cart</h1>

        {this.props.orderEmotionData.map((emotionData) => (
          <div key={emotionData.emotionId}>
            <h2> Emotion Name {emotions[emotionData.emotionId - 1].name}</h2>
            <h2> Emotion Quanitiy {emotionData.emotionQuantity}</h2>
            <form id={emotionData.emotionId} onSubmit={this.handleSubmit}>
              <label htmlFor="quantity"> Quanitiy</label>
              <input
                name="quantitye"
                defaultValue={emotionData.emotionQuantity}
                onChange={this.handleChange}
              />
            </form>
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
    changeQuantity: (orderId, emotionId, quantity) =>
      dispatch(updateQuantity(orderId, emotionId, quantity)),
  };
};
export default connect(mapStateToProps, mapDispatch)(UserCart);
