import { GENERAL_FETCH, GENERAL_FETCH_SUCCESS } from "./types";

const initialState = {
  data: [],
  fetching: false,
};

export default function generalReducer(state = initialState, action) {
  switch (action.type) {
    case GENERAL_FETCH:
      return { ...state, fetching: true };
    case GENERAL_FETCH_SUCCESS:
      return { ...state, data: action.payload, fetching: true };
    default:
      return state;
  }
}
