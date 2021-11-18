import {
  TOPIC_FETCH,
  TOPIC_FETCH_SUCCESS,
  TOPIC_INSERT,
} from "../reducers/topic/types";
import * as api from "../../api";

export const getTopic = (topicName) => async (dispatch, getState) => {
  const storeData = getState().topic;
  if (storeData.data.topic === topicName || storeData.fetching) {
    return Promise.resolve();
  }

  dispatch({ type: TOPIC_FETCH });

  const topicData = await api.getTopic(topicName);

  dispatch({
    type: TOPIC_FETCH_SUCCESS,
    payload: topicData,
  });
};

export const insertTopic = (comment) => async (dispatch, getState) => {
  const storeData = getState().topic;
  if (storeData.fetching) {
    return Promise.resolve();
  }

  const threadHead = await api.insertTopic(comment);

  dispatch({
    type: TOPIC_INSERT,
    payload: threadHead,
  });
};
