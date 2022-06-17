import axios from "axios";

//ACTION TYPES
const SET_USERS = "SET_USERS";
const DELETE_USER = "DELETE_USER";

//ACTION CREATORS
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const deleteUsers = (users) => {
  return {
    type: DELETE_USER,
    users,
  };
};

//THUNK
export const fetchUsers = () => {
  return async (dispatch) => {
    const { data: users } = await axios.get("/api/users");
    dispatch(setUsers(users));
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    const { data: deleteUsers } = await axios.delete(`/api/users/${userId}`);
    dispatch(setUsers(deleteUsers));
  };
};

//REDUCER
export default function usersReducer(state = [], action) {
  switch (action.type) {
    case SET_USERS: {
      return action.users;
    }
    case DELETE_USER: {
      return state.filter((user) => user.id !== action.users.id);
    }
    default:
      return state;
  }
}
