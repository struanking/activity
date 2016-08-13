/* */
import { expect } from 'chai';
import { Map, fromJS } from 'immutable';

import reducer from './itemsReducer';

describe('reducer', function () {

  it('should set initial state', () => {
    const initialState = new Map();
    const nextState = reducer(initialState, {});
    expect(nextState).to.equal(fromJS({}));
  });

  it('should add an item to state', () => {
    const initialState = new Map();
    const nextState = reducer(initialState, {
      type: 'ITEM_ADD',
      data: {
        id: 1,
        name: 'first'
      }
    });
    expect(nextState).to.equal(fromJS(
      {
        id: 1,
        name: 'first'
      }
    ));
  });

  it('should update an item in state', () => {
    const initialState = new Map({
      id: 1,
      name: 'foo'
    });
    const nextState = reducer(initialState, {
      type: 'ITEM_UPDATE',
      data: {
        id: 1,
        name: 'bar'
      }
    });
    expect(nextState).to.equal(fromJS(
      {
        id: 1,
        name: 'bar'
      }
    ));
  });
});
