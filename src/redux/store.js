import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import weather from './reducers/weather';
import theme from './reducers/theme';
import currentData from './reducers/currentData';

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({type: action})
  }
  return dispatch(action);
};

const store = createStore(
  combineReducers({weather, theme, currentData}),
  compose(
    applyMiddleware(ReduxThunk, stringMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;