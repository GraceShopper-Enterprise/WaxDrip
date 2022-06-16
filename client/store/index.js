import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import emotionReducer from "./allEmotions";
import singleEmotionReducer from "./singleEmotion";

const reducer = combineReducers({
  auth,
  emotions: emotionReducer,
  singleEmotion: singleEmotionReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
