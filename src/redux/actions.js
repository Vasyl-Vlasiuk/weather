import { 
  FETCHING, 
  FETCHED_CURRENT_WEATHER, 
  FETCHED_FORECAST, 
  FETCHING_ERROR, 
  CHANGE_THEME,
  FETCHED_CITY, 
  FETCHED_TIME, 
  CHANGE_SEARCH_STATUS,
  UNIT} from './types';

//!* Запити на сервер, робота з DOM, генерування рандомних чисел, отримання Date і т.п. краще здійснювати у actions, так як редьюсер pure function.
export const fetchCurrentWeather = (getCurrentWeather, lat, lon, unit) => (dispatch) => {
  dispatch(weatherFetching());

  getCurrentWeather(lat, lon, unit) 
    .then(data => dispatch(weatherCurrentFetched(data)))
    .catch(() => dispatch(weatherFetchingError()))
}

export const fetchForecast = (getForecast, lat, lon, unit) => (dispatch) => {
  dispatch(weatherFetching());

  getForecast(lat, lon, unit) 
    .then(data => dispatch(weatherForecastFetched(data)))
    .catch(() => dispatch(weatherFetchingError()))
}

export const weatherFetching = () => ( {type: FETCHING} )

export const weatherCurrentFetched = (currentWeather) => {
  return {
    type: FETCHED_CURRENT_WEATHER,
    payload: currentWeather
  }
}

export const weatherForecastFetched = (forecast) => {
  return {
    type: FETCHED_FORECAST,
    payload: forecast
  }
}

export const weatherFetchingError = () => ({type: FETCHING_ERROR})

export const changeTheme = (index) => {
  return {
    type: CHANGE_THEME,
    payload: index
  }
}

export const changeCity = (city) => {
  return {
    type: FETCHED_CITY,
    payload: city
  }
}

export const timeFetch = (time) => {
  return {
    type: FETCHED_TIME,
    payload: time()
  }
}

export const changeSearchStatus = () => {
  return {
    type: CHANGE_SEARCH_STATUS,
  }
}

export const changeUnit = () => {
  return {
    type: UNIT,
  }
}

