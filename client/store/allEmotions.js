import axios from "axios";

//ACTION TYPES
const SET_EMOTIONS = "SET_EMOTIONS";
const CREATE_EMOTION = "CREATE_EMOTION";
const UPDATE_EMOTION = "UPDATE_EMOTION";
const DELETE_EMOTION = "DELETE_EMOTION";

//ACTION CREATORS
export const setEmotions = (emotions) => {
  return {
    type: SET_EMOTIONS,
    emotions,
  };
};

const _createEmotion = (emotion) => {
  return {
    type: CREATE_EMOTION,
    emotion,
  };
};

const _updateEmotion = (emotion) => {
  return {
    type: UPDATE_EMOTION,
    emotion,
  };
};

export const _deleteEmotion = (emotion) => {
  return {
    type: DELETE_EMOTION,
    emotion,
  };
};

// THUNK CREATORS
export const fetchEmotions = () => async (dispatch) => {
  const { data } = await axios.get("/api/emotions");
  dispatch(setEmotions(data));
};

export const createEmotion = (emotion, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/api/emotions", emotion);
    dispatch(_createEmotion(created));
    history.push("/emotions");
  };
};

export const updateEmotion = (emotion, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(
      `/api/emotions/${emotion.id}`,
      emotion
    );
    dispatch(_updateEmotion(updated));
    history.push("/emotions");
  };
};

export const deleteEmotion = (emotionId) => {
  return async (dispatch) => {
    const { data: deleted } = await axios.delete(`/api/emotions/${emotionId}`);
    dispatch(_deleteEmotion(deleted));
  };
};

const initialState = [];

// added to the Redux store with combineReducers
export default function emotionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMOTIONS:
      return action.emotions;
    case CREATE_EMOTION:
      return [...state, action.emotion];
    case UPDATE_EMOTION:
      return state.map((emotion) =>
        emotion.id === action.emotion.id ? action.emotion : emotion
      );
    case DELETE_EMOTION:
      return state.filter((emotion) => emotion.id !== action.emotions.id);
    default:
      return state;
  }
}
