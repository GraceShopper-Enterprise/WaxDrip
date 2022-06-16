import axios from "axios";

const SINGLE_EMOTION = "SINGLE_EMOTION";

export const setSingleEmotion = (emotion) => {
  return {
    type: SINGLE_EMOTION,
    emotion,
  };
};

// Thunk

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
