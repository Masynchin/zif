import axios from "axios";
import {
  TOPIC_FETCH,
  TOPIC_FETCH_SUCCESS,
  TOPIC_INSERT,
} from "../reducers/topic/types";

export const getTopic = (topicName) => async (dispatch, getState) => {
  const storeData = getState().topic;
  if (storeData.data.topic === topicName || storeData.fetching) {
    return Promise.resolve();
  }

  dispatch({ type: TOPIC_FETCH });

  const response = await axios.get(
    `http://localhost:8000/api/comments/${topicName}`
  );

  dispatch({
    type: TOPIC_FETCH_SUCCESS,
    payload: response.data,
  });
};

export const insertTopic = (comment) => async (dispatch, getState) => {
  const storeData = getState().topic;
  if (storeData.fetching) {
    return Promise.resolve();
  }

  const response = await axios.post(
    "http://localhost:8000/api/comments/",
    comment
  );

  dispatch({
    type: TOPIC_INSERT,
    payload: response.data.__data__,
  });
};
