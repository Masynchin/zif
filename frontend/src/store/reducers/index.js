import { combineReducers } from "redux";
import threadReducer from "./thread";
import topicReducer from "./topic";

export default combineReducers({
  thread: threadReducer,
  topic: topicReducer,
});
