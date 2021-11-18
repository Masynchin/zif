import { combineReducers } from "redux";
import generalReducer from "./general";
import threadReducer from "./thread";
import topicReducer from "./topic";

export default combineReducers({
  general: generalReducer,
  thread: threadReducer,
  topic: topicReducer,
});
