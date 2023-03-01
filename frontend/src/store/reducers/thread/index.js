import { THREAD_FETCH, THREAD_FETCH_SUCCESS, THREAD_INSERT } from "./types";

const initialState = {
  data: [],
  fetching: false,
};

export default function threadReducer(state = initialState, action) {
  switch (action.type) {
    case THREAD_FETCH:
      return { ...state, fetching: true };
    case THREAD_FETCH_SUCCESS:
      return { ...state, data: action.payload, fetching: false };
    case THREAD_INSERT:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
}
