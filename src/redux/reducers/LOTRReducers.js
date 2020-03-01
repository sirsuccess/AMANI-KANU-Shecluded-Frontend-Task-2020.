import {
  FETCH_LOTR_REQUEST,
  FETCH_LOTR_SUCCESS,
  FETCH_LOTR_FAILURE
} from "../types/LOTRTypes";

const initialState = {
  loading: false,
  LOTRs: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOTR_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case FETCH_LOTR_SUCCESS:
      return {
        loading: false,
        LOTRs: action.payload,
        error: ""
      };
    case FETCH_LOTR_FAILURE:
      return {
        loading: false,
        LOTRs: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
