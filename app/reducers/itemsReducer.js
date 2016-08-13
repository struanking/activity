import { Map } from 'immutable';

function setNewState(state, newState) {
  return state.merge(state, newState);
}

function itemsReducer(state = new Map(), action) {
  switch (action.type) {
    case 'ITEM_ADD':
      return setNewState(state, action.data);

    case 'ITEM_UPDATE':
      return setNewState(state, action.data);

    default:
      return state;
  }
}

export default itemsReducer;
