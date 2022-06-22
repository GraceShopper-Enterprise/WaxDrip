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
        <div className="item">
          <div className="itemDetails">
            <div className="empathy">
              Empathy Level: {singleItem.reccomendedEmpathyLevel}
            </div>
            <div className="singleImg">
              <img src={singleItem.imageURL} />
            </div>
            <div className="description">
              <div>
                <h2>Description:</h2> {singleItem.description}
              </div>
            </div>
            <div>
              <span>Price:</span> ${singleItem.price}
            </div>
            <div>
              <span>On Hand Quantity:</span> {singleItem.stockQuantity}
            </div>
            <div>
              <Link to={`/emotions/${singleItem.id}/edit`} />
            </div>
          </div>
        </div>
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
