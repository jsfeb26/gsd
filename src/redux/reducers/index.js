import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
  Item: itemReducer
});

export default rootReducer;
