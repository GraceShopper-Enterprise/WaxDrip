import React from "react";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchEmotions, setEmotions } from "../store/allEmotions";
//import SingleEmotion from './SingleEmotion';

const AllEmotions = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  const emotions = props.emotions;

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchEmotions());
    }

    fetchData();
  }, [dispatch]);

  return (
    <div>
      All Products
      <div className="displayAll">
        {emotions.map((emotion) => (
          <div key={emotion.id}>
            <div className="singleItem">
              <img className="emotionImages" src={emotion.imageURL} />
              <div>ProductId: {emotion.id}</div>
              <div>
                {emotion.name}: {emotion.stockQuantity}
              </div>
              <div>Price: ${emotion.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { emotions: state.emotions };
};

export default connect(mapStateToProps)(AllEmotions);
