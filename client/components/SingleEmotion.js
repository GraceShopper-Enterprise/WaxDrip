import React from "react";
import { connect } from "react-redux";
import { fetchSingleEmotion } from "../store/singleEmotion";
import { Link } from "react-router-dom";

export class SingleEmotion extends React.Component {
  componentDidMount() {
    try {
      const emotionId = this.props.match.params.emotionId;
      this.props.loadSingleEmotion(emotionId);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const singleItem = this.props.singleEmotion;
    return (
      <div>
        <div className="singleHeader">
          <div>WAXDRIP</div>
          <div className="cartLinks">
            <Link to="/emotions">Back to All Items</Link>
            <Link to="/emotions">Add Item to Cart</Link>
            <Link to="/emotions">Edit My Cart</Link>
          </div>
          <div>
            <Link to="/emotions">View My Cart</Link>
          </div>
        </div>
        <h1>{singleItem.name}</h1>
        <ul>
          <img src={singleItem.imageURL} />

          <li>{singleItem.description}</li>
          <li>{singleItem.price}</li>
          <li>{singleItem.reccomendedEmpathyLevel}</li>
          <li>{singleItem.stockQuantity}</li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    singleEmotion: state.singleEmotion,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleEmotion: (id) => dispatch(fetchSingleEmotion(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleEmotion);
