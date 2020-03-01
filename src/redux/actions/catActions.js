import axios from "axios";
import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_FAILURE
} from "../types/catTypes";

export const fetchCat = () => {
  return dispatch => {
    dispatch(fetchCatRequest());
    axios
      .get(process.env.REACT_APP_CAT_API_ENDPOINT, {
        headers: {
          "x-api-key": `${process.env.REACT_APP_CAT_API_KEY}` //the token is a variable which holds the token
        }
      })
      .then(response => {
        // response.data is the CAT
        const cat = response.data;
        dispatch(fetchCatSuccess(cat));
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchCatFailure(error.message));
      });
  };
};

export const fetchCatRequest = () => {
  return {
    type: FETCH_CAT_REQUEST
  };
};

export const fetchCatSuccess = CAT => {
  return {
    type: FETCH_CAT_SUCCESS,
    payload: CAT
  };
};

export const fetchCatFailure = error => {
  return {
    type: FETCH_CAT_FAILURE,
    payload: error
  };
};
