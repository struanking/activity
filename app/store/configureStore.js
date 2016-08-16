import { createStore } from 'redux';
import { fromJS, Map } from 'immutable';
import throttle from 'lodash/throttle';
import activityApp from 'reducers';
import { /*loadState,*/ saveState } from './localStorage';

import mockData from './mock';

const configureStore = () => {
  const persistedState = mockData; //loadState()
  const store = createStore(activityApp, fromJS(persistedState));

  store.subscribe(throttle(() => {
    saveState({
      activities: store.getState().activities,
      tasks: store.getState().tasks
    })
  }, 2000))

  return store
};

export default configureStore;
