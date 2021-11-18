import {
  GENERAL_FETCH,
  GENERAL_FETCH_SUCCESS,
} from "../reducers/general/types";
import * as api from "../../api";

export const getGeneral = () => async (dispatch, getState) => {
  const storeData = getState().thread;
  if (storeData.fetching) {
    return Promise.resolve();
  }

  dispatch({ type: GENERAL_FETCH });

  const generalData = await api.getGeneral();

  dispatch({
    type: GENERAL_FETCH_SUCCESS,
    payload: generalData,
  });
};
