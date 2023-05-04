import { FETCHING, FETCHED_CURRENT_WEATHER, FETCHED_FORECAST, FETCHING_ERROR, CHANGE_SEARCH_STATUS, UNIT } from '../types';

const initialState = {
  current: {},
  forecast: {},
  weatherLoadingStatus: 'idle',
  searchStatus: 'idle',
  unit: true
}

const weather = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        weatherLoadingStatus: 'loading'
      }
    case FETCHED_CURRENT_WEATHER:
      return {
        ...state,
        current: action.payload,
        weatherLoadingStatus: 'idle',
        searchStatus: 'idle'
      }
    case FETCHED_FORECAST:
      return {
        ...state,
        forecast: action.payload,
        weatherLoadingStatus: 'idle',
        searchStatus: 'idle'
      }
    case FETCHING_ERROR:
      return {
        ...state,
        weatherLoadingStatus: 'error'
      }
    case CHANGE_SEARCH_STATUS:
      return {
        ...state,
        searchStatus: 'searching'
      }
    case UNIT:
      return {
        ...state,
        unit: !state.unit
      }
    default: return state
  }
}

export default weather;

