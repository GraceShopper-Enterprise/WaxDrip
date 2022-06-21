import axios from "axios";
import SingleEmotion from "../components/SingleEmotion";
import { _deleteEmotion } from "./allEmotions";

//ACTION TYPES
const SINGLE_ORDER_EMOTIONDATA = "SINGLE_ORDER_EMOTIONDATA";
const UNASSIGN_ORDER_SINGLE_EMOTION = "UNASSIGN_ORDER_SINGLE_EMOTION";

//ACTION CREATORS

export const _unassignOrderSingleEmotion = (Emotion) => {
  return {
    type: UNASSIGN_ORDER_SINGLE_EMOTION,
    unassignedEmotion: Emotion,
  };
};

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

export const unassignOrderSingleEmotion = (Order, Emotion) => {
  return async (dispatch) => {
    await axios.put(`/api/orders/${Order}/${Emotion}/unassign`);
    dispatch(_unassignOrderSingleEmotion(Order, Emotion));
  };
};

const initalState = [];

//Reducer

const singleOrderEmotionDataReducer = (state = initalState, action) => {
  switch (action.type) {
    case SINGLE_ORDER_EMOTIONDATA:
      return action.EmotionData;
    case UNASSIGN_ORDER_SINGLE_EMOTION:
      return [...action.unassignOrderSingleEmotion];
    default:
      return state;
  }
};
export default singleOrderEmotionDataReducer;
