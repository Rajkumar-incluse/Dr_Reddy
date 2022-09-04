import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from "redux-thunk";

import appReducers from '../action-reducers/appReducers';

const reducers = combineReducers({
  ...appReducers
})

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
)

export default store