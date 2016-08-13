import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';

const activityApp = combineReducers({
  items: itemsReducer,
});

export default activityApp;
