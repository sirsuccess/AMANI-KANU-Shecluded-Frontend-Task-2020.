import axios from "axios";
import {
  FETCH_LOTR_REQUEST,
  FETCH_LOTR_SUCCESS,
  FETCH_LOTR_FAILURE
} from "../types/LOTRTypes";

export const fetchLOTR = () => {
  return dispatch => {
    dispatch(fetchLOTRRequest());
    axios
      .get(`${process.env.REACT_APP_LOTR_API_ENDPOINT}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_LOTR_API_KEY}` //the token is a variable which holds the token
        }
      })
      .then(response => {
        // response.data is the CAT
        const cat =  response.data.docs;
        dispatch(fetchLOTRSuccess(cat));
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchLOTRFailure(error.message));
      });
  };
};

export const fetchLOTRRequest = () => {
  return {
    type: FETCH_LOTR_REQUEST
  };
};

export const fetchLOTRSuccess = LOTR => {
  return {
    type: FETCH_LOTR_SUCCESS,
    payload: LOTR
  };
};

export const fetchLOTRFailure = error => {
  return {
    type: FETCH_LOTR_FAILURE,
    payload: error
  };
};
