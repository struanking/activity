import { createStore } from 'redux';
import { fromJS } from 'immutable';
import throttle from 'lodash/throttle';
import activityApp from 'reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(activityApp, fromJS(persistedState));

  store.subscribe(throttle(() => {
    saveState({
      item: store.getState().item
    })
  }, 2000))

  return store
};

export default configureStore;
