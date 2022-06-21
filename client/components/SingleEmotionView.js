import React from "react";
import { connect } from "react-redux";
import { fetchSingleEmotion } from "../store/singleEmotion";

export class SingleEmotionView extends React.Component {
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
        <h1>{singleItem.name}</h1>
        <ul>
          <li>
            {" "}
            <img src={singleItem.imageURL} />
          </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleEmotionView);
