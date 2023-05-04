import { FETCHED_TIME, FETCHED_CITY } from "../types";

const initialState = {
  time: '',
  city: ''
}

const currentData = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_TIME:
      return {
        ...state,
        time: action.payload,
      }
      
    case FETCHED_CITY:
      return {
        ...state,
        city: action.payload,
      }

    default: return state
  }
}

export default currentData;