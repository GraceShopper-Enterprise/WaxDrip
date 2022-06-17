import axios from "axios";

//ACTION TYPES
const SINGLE_EMOTION = "SINGLE_EMOTION";

//ACTION CREATORS
export const setSingleEmotion = (emotion) => {
  return {
    type: SINGLE_EMOTION,
    emotion,
  };
};

// THUNK CREATORS
export const fetchSingleEmotion = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/emotions/${id}`);
      dispatch(setSingleEmotion(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initalState = {};

//Reducer

const singleEmotionReducer = (state = initalState, action) => {
  switch (action.type) {
    case SINGLE_EMOTION:
      return action.emotion;
    default:
      return state;
  }
};
export default singleEmotionReducer;
