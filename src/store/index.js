import {createStore,applyMiddleware} from 'redux';
import reducer from "./reducer";
import state from "./state";
import thunk from 'redux-thunk';

// let store = createStore(reducer, state,中间件1，中间件n);
let store = createStore(
  reducer,
  state,
  applyMiddleware(thunk)
);

export default store;