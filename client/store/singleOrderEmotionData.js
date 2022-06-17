import axios from "axios";

//ACTION TYPES
const SINGLE_ORDER_EMOTIONDATA = "SINGLE_ORDER_EMOTIONDATA";

//ACTION CREATORS
export const setSingleOrderEmotionData = (EmotionData) => {
  return {
    type: SINGLE_ORDER_EMOTIONDATA,
    EmotionData,
  };
};

// THUNK CREATORS
export const fetchSingleOrderEmotionData = (orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orders/${orderId}/emotionData`);
      dispatch(setSingleOrderEmotionData(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initalState = [];

//Reducer

const singleOrderReducer = (state = initalState, action) => {
  switch (action.type) {
    case SINGLE_ORDER_EMOTIONDATA:
      return action.EmotionData;
    default:
      return state;
  }
};
export default singleOrderReducer;
