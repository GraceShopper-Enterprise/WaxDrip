import axios from "axios";

//ACTION TYPES
const SET_USERS = "SET_USERS";
const SET_SINGLE_USER = "SET_SINGLE_USER";
// const CREATE_USER = "CREATE_USER";
// const UPDATE_USER = "UPDATE_USER";
// const DELETE_USER = "DELETE_USER";

//ACTION CREATORS
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setSingleUser = (singleUser) => {
  return {
    type: SET_SINGLE_USER,
    singleUser,
  };
};

// const _createUser = (user) => {
//   return {
//     type: CREATE_USER,
//     user,
//   };
// };

// const _updateUser = (user) => {
//   return {
//     type: UPDATE_USER,
//     user,
//   };
// };

// export const _deleteUser = (user) => {
//   return {
//     type: DELETE_USER,
//     user,
//   };
// };

// THUNK CREATORS
export const fetchUsers = () => async (dispatch) => {
  const { data } = await axios.get("/api/users");
  dispatch(setUsers(data));
};

export const fetchUserById = (id) => {
  return async (dispatch) => {
    const { data: user } = await axios.get(`/api/users/${id}`);
    //console.log(user);
    dispatch(setSingleUser(user));
  };
};

// export const createUser = (user, history) => {
//   return async (dispatch) => {
//     const { data: created } = await axios.post("/api/users", user);
//     dispatch(_createUser(created));
//     history.push("/users");
//   };
// };

// export const updateUser = (user, history) => {
//   return async (dispatch) => {
//     const { data: updated } = await axios.put(`/api/users/${user.id}`, user);
//     dispatch(_updateUser(updated));
//     history.push("/users");
//   };
// };

// export const deleteUser = (userId) => {
//   return async (dispatch) => {
//     const { data: deleted } = await axios.delete(`/api/users/${userId}`);
//     dispatch(_deleteUser(deleted));
//   };
// };

const initialState = [];

// added to the Redux store with combineReducers
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    case SET_SINGLE_USER:
      return action.singleUser;
    // case CREATE_USER:
    //   return [...state, action.user];
    // case UPDATE_USER:
    //   return state.map((user) =>
    //     user.id === action.user.id ? action.user : user
    //   );
    // case DELETE_USER:
    //   return state.filter((user) => user.id !== action.users.id);
    default:
      return state;
  }
}
