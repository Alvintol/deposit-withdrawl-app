import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const reducers = combineReducers({
  account: accountReducer
});
console.log('REDUCERS:', reducers)

export default reducers;