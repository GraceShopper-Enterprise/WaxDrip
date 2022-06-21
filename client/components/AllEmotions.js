import React from "react";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchEmotions, setEmotions } from "../store/allEmotions";

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
              <Link to={`/emotions/${emotion.id}`}>
                <div className="emotionImages">
                  {<img src={emotion.imageURL} />}
                </div>
              </Link>
              <div className="fontSize">{emotion.name}</div>
              <div>Price: ${emotion.price}</div>
              <div className="allProButtons">
                <div>
                  <button>Add To Cart</button>
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
  return { emotions: state.emotions };
};

export default connect(mapStateToProps)(AllEmotions);
