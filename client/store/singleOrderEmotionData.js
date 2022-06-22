import axios from "axios";

//ACTION TYPES
const SINGLE_ORDER_EMOTIONDATA = "SINGLE_ORDER_EMOTIONDATA";
const UNASSIGN_ORDER_SINGLE_EMOTION = "UNASSIGN_ORDER_SINGLE_EMOTION";
const ASSIGN_ORDER_SINGLE_EMOTION = "ASSIGN_ORDER_SINGLE_EMOTION";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const ADD_EMOTION_TO_CART = "ADD_EMOTION_TO_CART";

export const _addEmotionToCart = (orderId, emotionId) => {
  return {
    type: ADD_EMOTION_TO_CART,
    assignEmotionId: emotionId,
    cartId: orderId,
  };
};

export const _unassignOrderSingleEmotion = (orderId, emotionId) => {
  return {
    type: UNASSIGN_ORDER_SINGLE_EMOTION,
    unassignedEmotionId: emotionId,
    singleOrderId: orderId,
  };
};

export const _assignOrderSingleEmotion = (EmotionData) => {
  return {
    type: ASSIGN_ORDER_SINGLE_EMOTION,
    EmotionData,
  };
};

export const setSingleOrderEmotionData = (EmotionData) => {
  return {
    type: SINGLE_ORDER_EMOTIONDATA,
    EmotionData,
  };
};

export const _updateQuantity = (emotionId, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    singleEmotionId: emotionId,
    newQuantity: quantity,
  };
};

// THUNK CREATORS
export const fetchSingleOrderEmotionData = (orderId) => {
  return async (dispatch) => {
    if (orderId) {
      try {
        const { data } = await axios.get(`/api/orders/${orderId}/emotionData`);
        dispatch(setSingleOrderEmotionData(data));
      } catch (error) {
        console.error(error);
      }
    }
  };
};

export const addEmotionToCart = (orderId, emotionId) => {
  return async (dispatch) => {
    await axios.put(`/api/${orderId}/${emotionId}/assign`);
    dispatch(_addEmotionToCart(orderId, emotionId));
  };
};

export const unassignOrderSingleEmotion = (orderId, emotionId) => {
  return async (dispatch) => {
    await axios.put(`/api/orders/${orderId}/${emotionId}/unassign`);
    dispatch(_unassignOrderSingleEmotion(orderId, emotionId));
  };
};

export const assignOrderSingleEmotion = (orderId, emotionId) => {
  return async (dispatch) => {
    const { data } = await axios.put(
      `/api/orders/${orderId}/${emotionId}/assign`
    );
    dispatch(_assignOrderSingleEmotion(data));
  };
};

export const updateQuantity = (orderId, emotionId, quantity) => {
  return async (dispatch) => {
    await axios.put(`/api/orders/${orderId}/${emotionId}/${quantity}`);
    dispatch(_updateQuantity(orderId, emotionId, quantity));
  };
};

const initalState = [];

//Reducer

const singleOrderEmotionDataReducer = (state = initalState, action) => {
  switch (action.type) {
    case SINGLE_ORDER_EMOTIONDATA:
      return action.EmotionData;
    case UNASSIGN_ORDER_SINGLE_EMOTION:
      return state.filter(
        (orderEmotion) => orderEmotion.emotionid !== action.unassignedEmotionId
      );
    case ASSIGN_ORDER_SINGLE_EMOTION:
      return [...state, action.EmotionData];
    case UPDATE_QUANTITY:
      const newState = state.map((orderEmotion) => {
        if (orderEmotion.emotionId === action.singleEmotionId) {
          orderEmotion.quantity = action.newQuantity;
          return orderEmotion;
        } else {
          return orderEmotion;
        }
      });
      return newState;
    default:
      return state;
  }
};
export default singleOrderEmotionDataReducer;
