import { Map } from 'immutable';
import { setNewState } from './utils';

function tasksReducer(state = new Map(), action) {
  switch (action.type) {
    case 'ACTIVITY_ADD':
      return setNewState(state, action.data);

    case 'ACTIVITY_UPDATE':
      return setNewState(state, action.data);

    default:
      return state;
  }
}

export default tasksReducer;
