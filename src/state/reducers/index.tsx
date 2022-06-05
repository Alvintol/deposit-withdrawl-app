import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import inputReducer from './inputReducer';

const reducers = combineReducers({
  account: accountReducer,
  input: inputReducer
});

export default reducers;