import axios from "axios";
import {
  THREAD_FETCH,
  THREAD_FETCH_SUCCESS,
  THREAD_INSERT,
} from "../reducers/thread/types";

export const getThread = (topic, threadId) => async (dispatch, getState) => {
  const storeData = getState().thread;
  if (storeData.data.id === threadId || storeData.fetching) {
    return Promise.resolve();
  }

  dispatch({ type: THREAD_FETCH });

  const response = await axios.get(
    `http://localhost:8000/api/comments/${topic}/${threadId}`
  );

  dispatch({
    type: THREAD_FETCH_SUCCESS,
    payload: response.data,
  });
};
