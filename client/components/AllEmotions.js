import React from "react";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEmotions, setEmotions } from "../store/allEmotions";
import { fetchUserById } from "../store/allUsers";
import { fetchSingleEmotion } from "../store/singleEmotion";
import { assignOrderSingleEmotion } from "../store/singleOrderEmotionData";
import { fetchUserCart } from "../store/singleOrder";
import { fetchSingleOrderEmotionData } from "../store/singleOrderEmotionData";

const AllEmotions = (props) => {
  const dispatch = useDispatch();
  const emotions = props.emotions;
  const userId = props.auth.id;
  const singleOrderEmotionData = props.singleOrderEmotionData;
  let cart = props.singleOrder;
  let singleEmotion = props.singleEmotion;
  let userCart;

  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchEmotions());
    }

    fetchData();
  }, [dispatch]);

  async function handleAddToCart(event) {
    const emotionId = event.target.id;
    await dispatch(fetchSingleEmotion(emotionId));



    dispatch(assignOrderSingleEmotion(cart.id, emotionId));

    await dispatch(fetchSingleOrderEmotionData(cart.id));

  }

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
          <Link to="/emotions">
            View My Cart
            {/* {<img src="../../public/images/shoppingCart.png" />} */}
          </Link>
        </div>
      </div>
      <div className="displayAll">
        {emotions.map((emotion) => (
          <div key={emotion.id}>
            <div className="singleItem">
              <div className="price">Price: ${emotion.price}</div>
              <div className="emotionImages">
                <Link to={`/emotions/${emotion.id}`}>
                  <div>{<img src={emotion.imageURL} />}</div>
                </Link>
              </div>
              <div className="fontSize">{emotion.name}</div>

              <div className="allProButtons">
                <div>
                  <button
                    id={emotion.id}
                    name={emotion.name}
                    type="button"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
                <div>
                  <button>Special Offers</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    emotions: state.emotions,
    auth: state.auth,
    singleOrder: state.singleOrder,
    singleEmotion: state.singleEmotion,
    singleOrderEmotionData: state.singleOrderEmotionData,
    state: state,
  };
};

export default connect(mapStateToProps)(AllEmotions);
