import axios from "axios";

//ACTION TYPES
const SINGLE_ORDER = "SINGLE_ORDER";

//ACTION CREATORS
export const setSingleOrder = (order) => {
  return {
    type: SINGLE_ORDER,
    order,
  };
};

// THUNK CREATORS
export const fetchSingleOrder = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orders/${id}`);
      dispatch(setSingleOrder(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchUserCart = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}/cart`);
      dispatch(setSingleOrder(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initalState = {};

//Reducer

const singleOrderReducer = (state = initalState, action) => {
  switch (action.type) {
    case SINGLE_ORDER:
      return action.order;
    default:
      return state;
  }
};
export default singleOrderReducer;
