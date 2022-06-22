import axios from "axios";

//ACTION TYPES
const SET_ORDERS = "SET_ORDERS";
const CREATE_ORDER = "CREATE_ORDER";
const UPDATE_ORDER = "UPDATE_ORDER";
const DELETE_ORDER = "DELETE_ORDER";

//ACTION CREATORS
export const setOrders = (orders) => {
  return {
    type: SET_ORDERS,
    orders,
  };
};


const _createOrder = (order) => {
  return {
    type: CREATE_ORDER,
    order,
  };
};

const _updateOrder = (order) => {
  return {
    type: UPDATE_ORDER,
    order,
  };
};

export const _deleteOrder = (order) => {
  return {
    type: DELETE_ORDER,
    order,
  };
};

// THUNK CREATORS
export const fetchAllOrders = () => async (dispatch) => {
  const { data } = await axios.get("/api/orders");
  dispatch(setOrders(data));
};

export const fetchUserWishlists = (userId) => async (dispatch) => {
  const { data } = await axios.get(`/api/users/${userId}/wishlists`);
  dispatch(setOrders(data));
};

export const fetchUserOrders = (userId) => async (dispatch) => {
  const { data } = await axios.get(`/api/users/${userId}/oldOrders`);
  dispatch(setOrders(data));
};

export const createOrder = (order, history) => {
  //console.log(order);
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/orders", order);
    console.log(created);
    dispatch(_createOrder(created));
    history.push("/orders");
  };
};

export const updateOrder = (order, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/orders/${order.id}`, order);
    dispatch(_updateOrder(updated));
    history.push("/orders");
  };
};

export const deleteOrder = (orderId) => {
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(`/api/orders/${orderId}`);
    dispatch(_deleteOrder(deleted));
  };
};

const initialState = [];

// added to the Redux store with combineReducers
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders;
    case CREATE_ORDER:
      return [...state, action.order];
    case UPDATE_ORDER:
      return state.map((order) =>
        order.id === action.order.id ? action.order : order
      );
    case DELETE_ORDER:
      return state.filter((order) => order.id !== action.orders.id);
    default:
      return state;
  }
}
