import { Map } from 'immutable';
import { setNewState } from './utils';

function taskReducer(state = new Map(), action) {
  switch (action.type) {
    case 'TASK_ADD':
      return setNewState(state, action.data);

    case 'TASK_UPDATE':
      return setNewState(state, action.data);

    default:
      return state;
  }
}

export default taskReducer;
