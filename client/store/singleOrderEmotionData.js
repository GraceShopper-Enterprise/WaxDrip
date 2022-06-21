import axios from "axios";

//ACTION TYPES
const SINGLE_ORDER_EMOTIONDATA = "SINGLE_ORDER_EMOTIONDATA";
const UNASSIGN_ORDER_SINGLE_EMOTION = "UNASSIGN_ORDER_SINGLE_EMOTION";

//ACTION CREATORS

export const _unassignOrderSingleEmotion = (orderId, emotionId) => {
  return {
    type: UNASSIGN_ORDER_SINGLE_EMOTION,
    unassignedEmotionId: emotionId,
    singleOrderId: orderId,
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

export const unassignOrderSingleEmotion = (orderId, emotionId) => {
  return async (dispatch) => {
    await axios.put(`/api/orders/${orderId}/${emotionId}/unassign`);
    dispatch(_unassignOrderSingleEmotion(orderId, emotionId));
  };
};

const initalState = [];

//Reducer

const singleOrderEmotionDataReducer = (state = initalState, action) => {
  switch (action.type) {
    case SINGLE_ORDER_EMOTIONDATA:
      return action.EmotionData;
    case UNASSIGN_ORDER_SINGLE_EMOTION:
      return [...state, action.unassignedEmotionId, action.singleOrderId];
    default:
      return state;
  }
};
export default singleOrderEmotionDataReducer;
