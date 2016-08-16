//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import activityReducer from './activityReducer';
import taskReducer from './taskReducer';

const activityApp = combineReducers({
  activities: activityReducer,
  tasks: taskReducer,
});

export default activityApp;
