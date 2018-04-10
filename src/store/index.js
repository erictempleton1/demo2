import { createStore, combineReducers } from 'redux'
import topologyReducer from './topology/reducer';
import toolbarReducer from './toolbar/reducer';

const reducer = combineReducers({
  topologyReducer,
  toolbarReducer,
});

const store  = createStore(reducer);
export default store;
