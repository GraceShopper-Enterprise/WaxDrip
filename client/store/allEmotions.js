import axios from "axios";

//ACTION TYPES
const SET_EMOTIONS = "SET_EMOTIONS";
const DELETE_EMOTIONS = "DELETE_EMOTIONS";

//ACTION CREATORS
export const setEmotions = (emotions) => {
  return {
    type: SET_EMOTIONS,
    emotions,
  };
};

export const deleteEmotion = (emotions) => {
  return {
    type: DELETE_EMOTIONS,
    emotions,
  };
};

//THUNKS
export const fetchEmotions = () => {
  return async (dispatch) => {
    const { data: emotions } = await axios.get("/api/emotions");
    dispatch(setEmotions(emotions));
  };
};

export const deleteEmotions = (emotionId) => {
  return async (dispatch) => {
    const { data: deleteEmotions } = await axios.delete(
      `/api/emotions/${emotionId}`
    );
    dispatch(setEmotions(deleteEmotions));
  };
};

export default function emotionReducer(state = [], action) {
  switch (action.type) {
    case SET_EMOTIONS: {
      return action.emotions;
    }
    case DELETE_EMOTIONS:
      return state.filter((emotion) => emotion.id !== action.emotions.id);
    default:
      return state;
  }
}
