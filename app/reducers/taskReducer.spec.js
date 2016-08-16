import { expect } from 'chai';
import { Map, fromJS } from 'immutable';

import reducer from './taskReducer';

describe('Task reducer', function () {

  it('should set initial state', () => {
    const initialState = new Map();
    const nextState = reducer(initialState, {});
    expect(nextState).to.equal(fromJS({}));
  });

  it('should add a task to state', () => {
    const initialState = new Map();
    const nextState = reducer(initialState, {
      type: 'TASK_ADD',
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

  it('should update a task in state', () => {
    const initialState = new Map({
      id: 1,
      name: 'foo'
    });
    const nextState = reducer(initialState, {
      type: 'TASK_UPDATE',
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
