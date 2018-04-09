import { createStore, combineReducers } from 'redux'
import topologyReducer from './topology/reducer';

const reducer = combineReducers({
  topologyReducer
});

const store  = createStore(reducer);
export default store;
