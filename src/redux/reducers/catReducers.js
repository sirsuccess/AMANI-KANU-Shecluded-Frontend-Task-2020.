import {
    FETCH_CAT_REQUEST,
    FETCH_CAT_SUCCESS,
    FETCH_CAT_FAILURE
  } from '../types/catTypes'
  
  const initialState = {
    loading: false,
    cats: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CAT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_CAT_SUCCESS:
        return {
          loading: false,
          cats: action.payload,
          error: ''
        }
      case FETCH_CAT_FAILURE:
        return {
          loading: false,
          cats: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer