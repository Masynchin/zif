import { TOPIC_FETCH, TOPIC_FETCH_SUCCESS, TOPIC_INSERT } from "./types";

const initialState = {
  data: [],
  fetching: false,
};

export default function topicReducer(state = initialState, action) {
  switch (action.type) {
    case TOPIC_FETCH:
      return { ...state, fetching: true };
    case TOPIC_FETCH_SUCCESS:
      return { ...state, data: action.payload, fetching: false };
    case TOPIC_INSERT:
      return { ...state, data: [action.payload, ...state.data] };
    default:
      return state;
  }
}
