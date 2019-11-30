import counterReducer from './counter'
import { combineReducers } from 'redux';

// If we had multiple reducers, we would have combined them here.
const allReducers = combineReducers({ counterReducer });

export default allReducers;