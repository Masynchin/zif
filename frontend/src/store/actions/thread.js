import {
  THREAD_FETCH,
  THREAD_FETCH_SUCCESS,
  THREAD_INSERT,
} from "../reducers/thread/types";
import * as api from "../../api";

export const getThread = (topic, threadId) => async (dispatch, getState) => {
  const storeData = getState().thread;
  if (storeData.data.id === threadId || storeData.fetching) {
    return Promise.resolve();
  }

  dispatch({ type: THREAD_FETCH });

  const threadData = await api.getThread(topic, threadId);

  dispatch({
    type: THREAD_FETCH_SUCCESS,
    payload: threadData,
  });
};
